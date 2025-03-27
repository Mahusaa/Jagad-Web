import Link from "next/link"
import { CheckCircle, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PricingSection from "@/components/pricing-section"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Bento Grid Section */}
        <section id="services" className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-slate-600 md:text-xl">
              Everything you need to create a stunning online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Item */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                  <Button variant="outline" size="icon" className="h-16 w-16 rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Custom Website Design</h3>
                <p className="text-slate-600 mb-4">
                  Tailored designs that reflect your brand identity and engage your audience. Our design process focuses
                  on user experience and conversion optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Responsive", "User-Friendly", "Brand-Focused"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p className="text-slate-600 mb-4">
                Fast, secure, and scalable websites built with the latest technologies.
              </p>
              <ul className="space-y-2">
                {["Custom functionality", "E-commerce solutions", "Content management"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Marketing</h3>
              <p className="text-slate-600 mb-4">
                Strategies to increase visibility and drive qualified traffic to your website.
              </p>
              <ul className="space-y-2">
                {["SEO optimization", "Content strategy", "Analytics & reporting"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio Bento Grid Section */}
        <section id="portfolio" className="bg-blue-50 py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-slate-600 md:text-xl">
                Explore our latest projects and see how weve helped businesses transform their online presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Portfolio Item 1 - Large */}
              <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden shadow-md bg-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="h-16 w-16 rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">E-commerce Redesign</h3>
                  <p className="mt-2">Increased conversions by 45% with our responsive design</p>
                </div>
              </div>

              {/* Portfolio Item 2 */}
              <div className="relative rounded-xl overflow-hidden shadow-md bg-white aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <h3 className="font-bold">SaaS Platform</h3>
                  <p className="mt-1 text-sm">Modern UI for tech startup</p>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="relative rounded-xl overflow-hidden shadow-md bg-white aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <h3 className="font-bold">Restaurant Chain</h3>
                  <p className="mt-1 text-sm">Elegant design with online ordering</p>
                </div>
              </div>

              {/* Portfolio Item 4 */}
              <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-md bg-white aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <h3 className="font-bold">Corporate Website</h3>
                  <p className="mt-1 text-sm">Complete brand identity and website for Fortune 500 company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Features Bento Grid Section */}
        <section id="seo-features" className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SEO Advantages</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-slate-600 md:text-xl">
              Boost your online visibility with our comprehensive SEO features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* SEO Feature Video */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden shadow-md bg-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="outline" size="icon" className="h-16 w-16 rounded-full">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">SEO Strategy Overview</h3>
                <p className="mt-2">Watch how our SEO approach drives organic traffic and improves rankings</p>
              </div>
            </div>

            {/* SEO Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m5 12 5 5 9-9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Keyword Optimization</h3>
              <p className="text-slate-600">
                Strategic keyword research and implementation to target your ideal audience and improve search rankings.
              </p>
            </div>

            {/* SEO Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Technical SEO</h3>
              <p className="text-slate-600">
                Optimize site structure, speed, and mobile responsiveness to improve search engine crawlability.
              </p>
            </div>

            {/* SEO Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Content Strategy</h3>
              <p className="text-slate-600">
                Create valuable, SEO-friendly content that engages users and establishes your authority.
              </p>
            </div>

            {/* SEO Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">On-Page SEO</h3>
              <p className="text-slate-600">
                Optimize meta tags, headings, and content structure to improve search engine visibility.
              </p>
            </div>

            {/* SEO Feature 5 */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Performance Analytics</h3>
              <p className="text-slate-600">
                Comprehensive tracking and reporting to measure SEO success and identify opportunities for improvement.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-teal-50 p-3">
                  <div className="text-lg font-bold text-teal-600">+82%</div>
                  <div className="text-sm text-slate-600">Organic Traffic</div>
                </div>
                <div className="rounded-lg bg-teal-50 p-3">
                  <div className="text-lg font-bold text-teal-600">Top 10</div>
                  <div className="text-sm text-slate-600">Rankings</div>
                </div>
              </div>
            </div>

            {/* SEO Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="m10 14 11-11" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Link Building</h3>
              <p className="text-slate-600">
                Strategic outreach to build high-quality backlinks that boost your domain authority.
              </p>
            </div>

            {/* SEO Feature 7 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Local SEO</h3>
              <p className="text-slate-600">
                Optimize your online presence to attract local customers and appear in local search results.
              </p>
            </div>

            {/* SEO Feature Video 2 */}
            <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-md bg-white aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                  <Play className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <h3 className="font-bold">Client SEO Success Story</h3>
                <p className="mt-1 text-sm">How we increased organic traffic by 200% in 6 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-slate-100 py-24">
          <PricingSection />
        </section>

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

