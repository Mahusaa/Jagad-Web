import { Check, Code, Layers, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OurService() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-2 flex justify-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-xs">
              ✨ Layanan Kami ✨
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Expert Web Development
            <br />
            <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 sm:text-lg">
            We deliver end-to-end web development services tailored to your business needs, from stunning frontends
            to robust backend systems.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 p-1">
            <div className="h-full flex flex-col rounded-lg bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold sm:text-xl">Custom Web Development</h3>
              </div>
              <p className="text-gray-600 sm:text-base">
                Bespoke websites and web applications built with the latest technologies to deliver exceptional user
                experiences.
              </p>
              <ul className="mt-4 space-y-2">
                {["Responsive design", "Performance optimization", "SEO-friendly architecture"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 p-1">
            <div className="h-full flex flex-col rounded-lg bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold sm:text-xl">Full-Stack Development</h3>
              </div>
              <p className="text-gray-600 sm:text-base">
                End-to-end solutions that combine powerful backends with intuitive frontends for seamless user
                experiences.
              </p>
              <ul className="mt-4 space-y-2">
                {["API development", "Database architecture", "Cloud infrastructure"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 p-1">
            <div className="h-full flex flex-col rounded-lg bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold sm:text-xl">E-commerce Solutions</h3>
              </div>
              <p className="text-gray-600 sm:text-base">
                Custom online stores and marketplaces built to convert visitors into customers and drive sales.
              </p>
              <ul className="mt-4 space-y-2">
                {["Payment integration", "Inventory management", "Customer analytics"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

