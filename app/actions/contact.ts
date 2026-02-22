"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
    // Extract data from the FormData object
    const goal = formData.get("goal") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    const brief = formData.get("brief") as string;

    // Basic validation
    if (!goal || !name || !email || !brief) {
        return {
            success: false,
            message: "Please fill out all required fields.",
        };
    }

    // Simulate a realistic delay for backend processing (e.g., saving to DB, sending email)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you would integrate Prisma/Mongoose, Resend/SendGrid, etc., here.
    // Example:
    // await db.lead.create({ data: { goal, name, email, website, brief } })

    console.log("New Lead Received:");
    console.log({ goal, name, email, website, brief });

    return {
        success: true,
        message: "Your message has been received! Our team will be in touch shortly.",
    };
}
