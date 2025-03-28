import Link from "next/link"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import Header from "@/components/header"
import BentoGrid from "@/components/bento-grid"
import PricingPlan from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BentoGrid />
        <PricingPlan />


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
      <footer className="border-t bg-white">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
                <span className="font-bold">WebCraft</span>
              </div>
              <p className="text-sm text-slate-600">
                Creating exceptional digital experiences that drive business growth.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <Link key={social} href="#" className="text-slate-400 hover:text-slate-900">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded-full bg-slate-200"></div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="space-y-2">
                {["Website Design", "Web Development", "E-commerce", "SEO", "Digital Marketing"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Work", "Blog", "Careers", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-slate-600">123 Web Street, Digital City</li>
                <li className="text-sm text-slate-600">hello@webcraft.com</li>
                <li className="text-sm text-slate-600">(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-slate-600">
            <p>© {new Date().getFullYear()} WebCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

