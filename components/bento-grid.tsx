import { PhoneCall, Check, Code, Zap, Globe, Layers, Smartphone, Monitor, Lock } from "lucide-react"
import { Badge } from "./ui/badge"

export default function BentoGrid() {
  return (
    <section id="services" className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-slate-50">
      <div className="text-center mb-16">
        <div className="mb-2 flex justify-center">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-xs">
            ✨ Kelebihan Kami ✨
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Main Feature Card */}
        <div className="relative md:col-span-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-lg border border-blue-700/30 transition-all duration-300 hover:shadow-xl group overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-blue-500 opacity-20"></div>
          <div className="absolute bottom-4 right-8 w-36 h-36 rounded-full bg-blue-500 opacity-20"></div>

          {/* Circuit Lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute w-36 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent top-8 -left-12 rotate-45" />
            <div className="absolute w-28 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent bottom-12 left-5 -rotate-30" />
            <div className="absolute w-44 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent top-16 -left-5 rotate-15" />
            <div className="absolute w-1 h-1 rounded-full bg-blue-400 top-8 left-10 animate-pulse" />
            <div className="absolute w-1 h-1 rounded-full bg-blue-400 bottom-12 left-24 animate-pulse delay-1000" />
            <div className="absolute w-1 h-1 rounded-full bg-blue-400 top-16 left-28 animate-pulse delay-500" />
          </div>

          {/* Particles */}
          <div className="absolute w-2 h-0.5 rounded-full bg-blue-400 top-28 left-12 opacity-0 animate-[move-particle_6s_infinite_0.2s]" />
          <div className="absolute w-2 h-0.5 rounded-full bg-blue-400 top-44 left-28 opacity-0 animate-[move-particle_7s_infinite_1.5s]" />
          <div className="absolute w-2 h-0.5 rounded-full bg-blue-400 top-16 left-48 opacity-0 animate-[move-particle_8s_infinite_3s]" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2 text-sm opacity-90">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d="M12 2L14.39 7.26L20 8.27L16 12.14L17.18 17.73L12 15.13L6.82 17.73L8 12.14L4 8.27L9.61 7.26L12 2Z" fill="white" />
              </svg>
              Layanan Premium
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl font-bold">Custom Web Development</h1>
            <p className="text-lg leading-relaxed max-w-xl">
              We build tailored websites and web applications that perfectly align with your business goals.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/90 text-blue-700 rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-blue-800/20 group-hover:-translate-y-1"
            >
              Lihat Portfolio Kami
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Floating Code Block */}
          <div className="absolute w-32 h-28 bg-gray-900/80 rounded-xl right-40 bottom-20 border border-blue-500/30 backdrop-blur z-2 shadow-lg overflow-hidden transition-all duration-500 group-hover:rotate-[-5deg] group-hover:-translate-y-3">
            <div className="h-1.5 bg-blue-500 w-2/3 rounded mx-2 my-3" />
            <div className="h-1.5 bg-blue-500/30 w-11/12 rounded mx-2 my-2" />
            <div className="h-1.5 bg-blue-500/30 w-3/5 rounded mx-2 my-2" />
            <div className="h-1.5 bg-blue-500/30 w-4/5 rounded mx-2 my-2" />
          </div>

          {/* Floating Browser Preview */}
          <div className="absolute w-48 h-36 bg-gray-900/80 rounded-xl right-4 top-36 border border-blue-500/30 backdrop-blur shadow-lg overflow-hidden transition-all duration-500 group-hover:rotate-[10deg] group-hover:-translate-y-2 z-8">
            <div className="h-5 bg-gray-800/90 flex items-center px-2 border-b border-blue-500/30">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1" />
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1" />
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            </div>
            <div className="p-2 space-y-1.5">
              <div className="h-2 bg-blue-500 w-3/5 rounded" />
              <div className="h-2 bg-blue-500/30 w-11/12 rounded" />
              <div className="h-2 bg-blue-400 w-7/12 rounded" />
              <div className="h-2 bg-blue-500/30 w-4/5 rounded" />
              <div className="h-2 bg-blue-500/30 w-9/12 rounded" />
              <div className="h-2 bg-blue-500 w-2/5 rounded" />
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="md:col-span-4 bg-white rounded-3xl p-8 shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg group">
          <div className="mr-4 p-3 bg-blue-50 rounded-2xl inline-block ">
            <Lock className="h-6 w-6 text-blue-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Secure Solutions</h2>
          <p className="mb-6 text-slate-600 text-base leading-relaxed">
            We implement robust security protocols to protect your website from threats and vulnerabilities.
          </p>
          <ul className="space-y-2.5">
            {["SSL Implementation", "DDoS Protection", "Regular Security Audits"].map(
              (item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-blue-700" />
                  </div>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Performance Card */}
        <div className="md:col-span-4 bg-white rounded-3xl p-8 shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg group">
          <div className="mb-4 p-3 bg-blue-50 rounded-2xl inline-block">
            <Zap className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-slate-900">High Performance</h2>
          <p className="mb-6 text-slate-600 text-base leading-relaxed">
            Lightning-fast websites optimized for speed, ensuring excellent user experience and better search rankings.
          </p>
          <div className="bg-slate-50 rounded-2xl p-4 mt-auto">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-slate-500">Page load speed</span>
              <span className="text-xs font-medium text-blue-700">Under 2s</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
            </div>
          </div>
        </div>

        {/* Technology Stack Card */}
        <div className="md:col-span-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl group">
          <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-2xl inline-block">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Modern Tech Stack</h2>
          <p className="mb-6 text-blue-100 text-base leading-relaxed">
            We use cutting-edge technologies to build scalable and future-proof web solutions.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {["React", "Next.js", "Node", "Vue", "Laravel", "AWS"].map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
                <div className="text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Design Card */}
        <div className="md:col-span-4 bg-white rounded-3xl p-8 shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg group">
          <div className="mb-4 p-3 bg-blue-50 rounded-2xl inline-block">
            <Layers className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-slate-900">UI/UX Design</h2>
          <p className="mb-6 text-slate-600 text-base leading-relaxed">
            Creative, intuitive designs that enhance user engagement and drive conversions.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-3 text-center">
              <span className="block text-sm text-slate-700 font-medium mb-1">Wireframing</span>
              <span className="text-xs text-slate-500">Blueprint for success</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 text-center">
              <span className="block text-sm text-slate-700 font-medium mb-1">Prototyping</span>
              <span className="text-xs text-slate-500">Test before build</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-8 shadow-md border border-blue-500/30 transition-all duration-300 hover:shadow-lg group">
          <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-2xl inline-block">
            <PhoneCall className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Free Consultation</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <ul className="space-y-2.5">
              {["Project scope assessment", "Technology recommendations", "Timeline & budget insights"].map(
                (item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm text-blue-50">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <a href="#contact" className="inline-flex w-full justify-center items-center px-5 py-3 bg-white text-blue-700 rounded-lg font-medium text-sm transition-all hover:bg-blue-50">
            Book Your Free Session
          </a>
        </div>

        {/* Service Types Card */}
        <div className="md:col-span-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-md border border-blue-100/50 transition-all duration-300 hover:shadow-lg group">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-3 text-slate-900">Comprehensive Services</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                From concept to deployment and beyond, we provide end-to-end web development services to meet all your digital needs.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Globe className="h-5 w-5 text-blue-600 mb-2" />,
                  title: "Web Development",
                  description: "Custom websites & applications"
                },
                {
                  icon: <Smartphone className="h-5 w-5 text-blue-600 mb-2" />,
                  title: "Responsive Design",
                  description: "Mobile-optimized sites"
                },
                {
                  icon: <Monitor className="h-5 w-5 text-blue-600 mb-2" />,
                  title: "E-commerce",
                  description: "Online store solutions"
                },
                {
                  icon: <Zap className="h-5 w-5 text-blue-600 mb-2" />,
                  title: "Performance",
                  description: "Speed optimization"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                  {service.icon}
                  <h3 className="font-medium text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-xs text-slate-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
