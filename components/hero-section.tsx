
import { Star, Rocket, ChevronRight, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image";
import { Button } from "@/components/ui/button"

const avatars = [
  "/avatars/avatar1.jpg",
  "/avatars/avatar2.jpg",
  "/avatars/avatar1.jpg",
  "/avatars/avatar2.jpg",
  "/avatars/avatar1.jpg",
];

export default function HeroSection() {

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container relative mx-auto">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/2 w-96 h-40 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-40 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`space-y-8 transition-all duration-1000 ease-out`}
          >
            <div className="space-y-6">
              <div className="inline-flex text-white items-center rounded-lg justify-center bg-[#1E1F24] px-4 py-1 text-sm font-medium gap-2 shadow-lg shadow-black/20 border border-gray-800/50 backdrop-blur-sm">
                <div className="bg-blue-500 rounded-lg p-1 shadow-inner">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>Website Modern, Murah & Terima Beres</span>
                <div className="bg-gray-800 rounded-full p-1 mt-1">
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-800 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                Kami Bikin Website Impianmu Menjadi Nyata
              </h1>


              <div className="space-y-1">
                <p className="mx-auto max-w-[700px] text-[#7f838A] md:text-md">
                  Kami merancang website yang menarik dan fungsional untuk membantu bisnis Anda berkembang. Dengan perpaduan desain dan teknologi, kami menciptakan pengalaman digital yang berkesan.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="relative py-7 px-8 font-semibold text-white 
                bg-gradient-to-r from-blue-600 to-blue-500
                hover:brightness-110 active:translate-y-[2px]
                transition-all duration-300 hover:translate-y-[-2px] 
                shadow-blue-500/30 shadow-lg rounded-xl group"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  Mulai Project
                  <Rocket className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>

                <span
                  className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent 
                    opacity-80 pointer-events-none rounded-xl"
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="relative py-7 px-8 w-full sm:w-auto font-semibold
    border-gray-300 bg-white
    shadow-md text-gray-900
    transition-all duration-300 hover:translate-y-[-2px] 
    rounded-xl group"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  Portfolio Kami
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gray-900" />
                </span>
              </Button>


            </div>
            <div className="absolute top-1/4 right-0 w-64 h-96 translate-x-1/3 -translate-y-1/4 rotate-6">
              <div className="w-full h-full bg-orange-200 rounded-xl p-4">
                <div className="text-lg font-bold">Elevate Your Brand with Data</div>
                <div className="text-sm mb-4">Driven Marketing</div>
                <div className="flex gap-4 mt-8">
                  <div className="w-16 h-16 bg-purple-700 rounded-lg"></div>
                  <div className="w-16 h-16 bg-orange-700 rounded-lg"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 justify-center">
              <div className="relative">
                <div className="flex -space-x-3">
                  {avatars.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Avatar ${index + 1}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs shadow-black"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items center justify-center">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-tight">
                  <span className="font-semibold text-gray-800">100+</span> client puas
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


