
import { Button } from "@/components/ui/button"
import BentoGrid from "@/components/bento-grid"
import PricingTabs from "@/components/pricing-table"
import Header from "@/components/header-float"
import HeroSection from "@/components/hero-section"
import OurService from "@/components/our-service"
import Whatsapp from "@/components/whatsapp"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Testimonial from "@/components/testimonial"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <OurService />


        <BentoGrid />
        <Testimonial />
        <PricingTabs />
        <FAQ />
        <Whatsapp />


        {/* CTA Section */}
        <section className="container py-24">
          <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-white md:p-16 shadow-lg">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform your online presence?
                </h2>
                <p className="text-white/80 md:text-xl">
                  Lets create a website that drives results for your business. Schedule a free consultation today.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

