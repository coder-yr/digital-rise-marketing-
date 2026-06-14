import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { constructMetadata } from '@/lib/seo'
import { MapPin, Target, Sparkles, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>
}): Promise<Metadata> {
  const { location } = await params
  const formattedLocation = location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return constructMetadata({
    title: `Digital Marketing Agency in ${formattedLocation} | #1 Agency`,
    description: `Leading digital marketing services in ${formattedLocation}. We specialize in SEO, PPC, and AI automation to help businesses in ${formattedLocation} grow.`,
  })
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>
}) {
  const { location } = await params
  const formattedLocation = location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-dr-navy text-white pt-40 pb-20 overflow-hidden">
         {/* Ambient Background */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-dr-gold/5 rounded-full blur-[150px]" />
          <div className="hidden md:block absolute bottom-[20%] -right-[5%] w-[500px] h-[500px] bg-dr-orange/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <Breadcrumbs items={[{ label: formattedLocation }]} />
          
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border border-dr-gold/20 mb-8">
              <MapPin size={14} className="text-dr-gold" />
              <span className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase">{formattedLocation} Division</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10">
              DOMINATE THE <br />
              <span className="text-gradient-gold uppercase">{formattedLocation} MARKET.</span>
            </h1>
            <p className="text-dr-text/60 text-xl max-w-2xl mx-auto leading-relaxed">
              We engineer high-performance growth systems for businesses in {formattedLocation}, blending AI automation with elite marketing strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="glass p-10 rounded-[2.5rem] border border-white/5">
              <Target className="text-dr-gold mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Local SEO</h3>
              <p className="text-white/40 leading-relaxed">Owning search results in {formattedLocation} and outranking competitors where it matters most.</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/5">
              <Sparkles className="text-dr-orange mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
              <p className="text-white/40 leading-relaxed">Custom agents to handle lead qualification and CRM tasks for your {formattedLocation} business.</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/5">
              <TrendingUp className="text-dr-green mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Paid Advertising</h3>
              <p className="text-white/40 leading-relaxed">High-ROI campaigns targeting the specific demographic of {formattedLocation} and surrounding areas.</p>
            </div>
          </div>

          <div className="glass p-12 md:p-20 rounded-[3.5rem] border border-white/5 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Ready to scale in {formattedLocation}?</h2>
            <Link href="/booking" className="inline-flex px-12 py-6 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-2xl hover:bg-dr-gold-hover transition-all uppercase">
              Get My Growth Audit
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
