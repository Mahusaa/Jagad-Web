import { Check } from "lucide-react"
import Image from "next/image"
export default function BentoGrid() {
  return (
    <section id="seo-features" className="py-10 md:mx-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Advantages</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-slate-600 md:text-xl">
          Boost your online visibility with our comprehensive features
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-6">
        <div className="col-span-1 sm:col-span-6 md:col-span-8  bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl p-8 shadow-sm border border-blue-400 transition-all duration-300 hover:shadow-md group">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold mb-3">Website Modern dan Responsif</h2>
              <p className="mb-6 text-blue-100 text-lg">
                Dengan desain adaptif, kecepatan tinggi, dan navigasi intuitif, website yang responsif tidak hanya meningkatkan kepuasan pengunjung, tetapi juga lebih disukai oleh mesin pencari, membantu bisnis lebih mudah ditemukan dan berkembang.
              </p>
            </div>
            <div className="md:w-2/5 relative h-40 md:h-60 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.1]">
              <Image
                src="/bento-tryout.png"
                alt="Drag and drop illustration"
                fill
                className="object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Regular updates - Medium rectangle */}
        <div className="col-span-1 sm:col-span-6 md:col-span-4 bg-gradient-to-r from-emerald-200 to-teal-100 rounded-3xl p-8 shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-md group">
          <h2 className="text-3xl font-bold mb-3 text-emerald-900">Fitur Unggulan</h2>
          <p className="mb-6 text-emerald-700 text-lg">Kita bikin website kalian naik kelas</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Clean Design", "Fast Load", "Secure Web", "Responsive"].map(
              (item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-emerald-900 rounded-full p-1 mr-3 mt-0.5 backdrop-blur-sm flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-emerald-700">{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Customer testimonials - Medium rectangle */}
        <div className="col-span-1 sm:col-span-6 md:col-span-6 bg-gradient-to-r from-amber-100 to-orange-200 rounded-3xl p-8 shadow-sm border border-orange-200 transition-all duration-300 hover:shadow-md group overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-6 h-full">
            {/* Image Section */}
            <div className="sm:w-1/2 relative h-48 sm:h-auto rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/vibecoding.png"
                alt="Customer using the product"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="sm:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-2">
                Tim IT Canggih
              </h2>
              <p className="text-orange-800 text-base md:text-lg leading-relaxed mb-4">
                Dengan sistem keamanan berlapis, hosting berkualitas tinggi, dan infrastruktur yang bisa menampung traffic besar
              </p>
            </div>
          </div>
        </div>


        {/* New feature highlight - Medium rectangle */}
        <div className="col-span-1 sm:col-span-6 md:col-span-6 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-3xl p-8 shadow-sm border border-violet-400 transition-all duration-300 hover:shadow-md group">
          <div className="flex flex-col sm:flex-row gap-6 h-full">
            <div className="sm:w-3/5 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 w-fit">
                New Feature
              </span>
              <h2 className="text-3xl font-bold mb-3">SEO Friendly</h2>
              <p className="text-violet-100 mb-6">
                Website lambat bikin calon pelanggan kabur! Kami memastikan performa website kamu ngebut & optimal di semua perangkat, plus SEO yang kuat biar makin mudah ditemukan di Google.
              </p>
            </div>
            <div className="sm:w-2/5 relative h-40 sm:h-auto rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.1]">
              <Image
                src="/seo-image.png"
                alt="AI design feature"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Customizable - Wide rectangle */}
        <div className="col-span-1 sm:col-span-6 md:col-span-8 bg-gradient-to-r from-rose-50 to-pink-100 rounded-3xl p-8 shadow-sm border border-rose-100 transition-all duration-300 hover:shadow-md group">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-3 text-rose-900">100% Cuztomizabel</h2>
              <p className="text-rose-700 mb-6 text-lg">
                Jangan puas dengan website yang itu-itu saja! Kami membangun website yang bisa disesuaikan dengan branding, kebutuhan bisnis, dan pengalaman pengguna terbaik.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[220px] rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.1]">
              <Image
                src="/customize.png"
                alt="Customization interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Daily new components - Medium rectangle */}
        <div className="col-span-1 sm:col-span-6 md:col-span-4 relative text-white rounded-3xl p-8 shadow-sm border border-pink-100 transition-all duration-300 hover:shadow-md group overflow-hidden">
          {/* Background Image */}
          <Image
            src="/handwithphone.png"
            alt="Background"
            fill
            className="object-cover absolute z-0"
          />
        </div>
      </div>

    </section>

  )
}
