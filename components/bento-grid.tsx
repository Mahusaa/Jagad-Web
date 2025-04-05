import { PhoneCall, Check, ArrowRight, Sparkles, Code, Zap, Globe, Layers, Smartphone, Monitor, Lock } from "lucide-react"
import { Badge } from "./ui/badge"
import Image from "next/image"

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
        <div className="md:col-span-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-lg border border-blue-700/30 transition-all duration-300 hover:shadow-xl group">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-3/5">
              <div className="flex items-center space-x-1 mb-3">
                <Sparkles className="h-5 w-5 text-blue-200" />
                <span className="text-blue-200 text-sm font-medium ml-1">Layanan Premium</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Web Development</h2>
              <p className="mb-6 text-blue-100 text-base md:text-lg leading-relaxed">
                We build tailored websites and web applications that perfectly align with your business goals.
              </p>
              <a href="#" className="inline-flex items-center px-5 py-2.5 bg-white text-blue-700 rounded-lg font-medium text-sm transition-all hover:bg-blue-50 group-hover:translate-x-1">
                Lihat Portfolio Kami<ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="md:w-2/5 relative h-48 md:h-64 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/bento-tryout.png"
                alt="Custom Web Development"
                fill
                className="object-cover"
              />
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
