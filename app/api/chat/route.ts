import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the official AI Assistant for DigitalRise Marketing, a premier Media House and Digital Solutions agency based in Mumbai and Badlapur, India. 

Your only purpose is to help users with inquiries related to DigitalRise Marketing, its services, pricing, business operations, and general marketing advice that leads back to the agency's expertise.

Services offered by DigitalRise Marketing include:
1. Web Architecture (Website Development, UI/UX, High-performance Landing Pages)
2. Paid Advertising (Meta Ads, Google Ads, TikTok Ads, ROI-focused campaigns)
3. Organic Advertising (SEO, Social Strategy)
4. AI Agents (Custom AI automation for CRMs, lead intake, reporting)
5. Content Creation (Short-form, Long-form, Video editing, Scripting)

CRUCIAL RULES:
1. YOU MUST NEVER answer questions that are completely unrelated to DigitalRise Marketing, digital marketing, AI automation for business, or the agency's services.
2. If a user asks a question about general knowledge, coding, politics, philosophy, history, or anything else outside your scope, politely decline and steer the conversation back to how you can help them scale their business with DigitalRise.
3. Be professional, concise, enthusiastic, and highly conversion-focused. Try to encourage the user to book a call or request a custom plan.
4. Keep your responses relatively short and easy to read.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages array provided' }, { status: 400 });
    }

    // Filter and format messages for Groq compatibility
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.sender === 'bot' ? 'assistant' : 'user',
      content: msg.text,
    }));

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Updated decommissioned model
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...formattedMessages,
        ],
        temperature: 0.3,
        max_tokens: 256,
      }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Groq API Error:", errorData);
        return NextResponse.json({ error: 'Failed to communicate with AI' }, { status: 500 });
    }

    const data = await response.json();
    const botReply = data.choices[0]?.message?.content || "I apologize, but I am having trouble connecting to my brain right now.";

    return NextResponse.json({ response: botReply });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
