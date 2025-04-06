
import { ChevronRight, CircleDollarSign } from "lucide-react"
import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  return (

    <section className="relative overflow-hidden pt-20 md:pt-24 md:pb-5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/20 opacity-50 animate-[float_15s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-40 h-40 rounded-full border border-white/10 opacity-30 animate-[float_18s_ease-in-out_infinite]"
          style={{ animationDelay: '-5s' }}></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full border border-white/15 opacity-40 animate-[float_20s_ease-in-out_infinite]"
          style={{ animationDelay: '-10s' }}></div>

        {/* Floating polygons */}
        <div className="absolute top-20 right-1/3 opacity-20 animate-[spin_30s_linear_infinite]">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <polygon points="60,10 100,40 80,90 40,90 20,40" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-30 animate-[spin_25s_linear_infinite_reverse]">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="10" y="10" width="60" height="60" stroke="white" strokeWidth="1" fill="none" transform="rotate(15 40 40)" />
          </svg>
        </div>
      </div>

      {/* Moving gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-400 opacity-20 blur-3xl animate-[moveAround_25s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-purple-400 opacity-10 blur-3xl animate-[moveAround_30s_ease-in-out_infinite_alternate]"
          style={{ animationDelay: '-15s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-60 h-60 rounded-full bg-cyan-400 opacity-15 blur-3xl animate-[moveAround_20s_ease-in-out_infinite_alternate]"
          style={{ animationDelay: '-7s' }}></div>
      </div>

      {/* Dynamic grid with moving lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Animated horizontal line */}
          <line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            className="animate-[moveLeftRight_15s_linear_infinite]"
          />

          {/* Animated vertical line */}
          <line
            x1="70%"
            y1="0"
            x2="70%"
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            className="animate-[moveUpDown_20s_linear_infinite]"
          />
        </svg>
      </div>


      {/* Trust badge with improved visuals */}
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col">
          <div className="relative flex items-center justify-center backdrop-blur-sm bg-white/10 rounded-full px-3 py-0.5 w-fit mx-auto mb-8 border border-white/20 shadow-lg shadow-blue-900/20">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-6 rounded-full border-2 border-white overflow-hidden shadow-inner">
                  <Image
                    src={`/avatars/avatar${i}.jpg`}
                    width={50}
                    height={50}
                    alt={`Client ${i}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* TEXT */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-white">Dipercaya 500+ clients</span>
            </div>
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center text-center mx-auto">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Jasa Bikin Website
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Murah dan Premium
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Agensi Web development yang membantu mentransformasikan
            <span className="relative inline-block mx-1">
              bisnis anda
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 10">
                <path d="M0 5 Q25 0 50 5 Q75 10 100 5" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </span>
            ke digital dengan design dan teknologi modern.
          </p>

          {/* Badge section */}
          <div className="flex flex-wrap justify-center gap-4 mt-2 mb-2">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CircleDollarSign className="w-5 h-5 mr-1.5 mt-0.5 text-yellow-500" />
              <span className="text-sm font-medium text-white">Konversi Tinggi</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg className="h-5 w-5 text-green-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm font-medium text-white">100% Puas</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg className="h-5 w-5 text-blue-300 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <span className="text-sm font-medium text-white">Pengerjaan Cepat</span>
            </div>
          </div>

          <div className="mt-2 flex flex-row gap-4">
            <Button className="rounded-full bg-white text-blue-600 hover:bg-blue-50 font-medium shadow-lg shadow-blue-700/30 px-8 py-6 relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-blue-100 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center">
                Mulai Project
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-white text-white hover:bg-white/10 px-8 py-6"
            >
              <span className="flex items-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Portfolio Kami
              </span>
            </Button>
          </div>

          {/* Enhanced image container with glowing effect */}
          <div className="relative w-full max-w-5xl group md:top-[-80px]">
            <div className="absolute -top-8 -left-4 w-20 h-20 md:w-32 md:h-32 animate-[spin_30s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300 opacity-50">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="20" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>

            <div className="absolute -bottom-8 -right-4 w-16 h-16 md:w-24 md:h-24 animate-[spin_25s_linear_infinite_reverse]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300 opacity-50">
                <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="8 4" />
              </svg>
            </div>

            <Image
              src="/hero-sec.png"
              width={1200}
              height={700}
              alt="Website Dashboard"
              priority
              className="ml-10 md:ml-20 drop-shadow-[0px_0px_50px_rgba(255,255,255,0.2)]"
            />


          </div>

          {/* Moving wave pattern at bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-24 md:h-32 opacity-40"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill="white"
                fillOpacity="0.05"
                className="animate-[wave_15s_ease-in-out_infinite_alternate]"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                fill="white"
                fillOpacity="0.05"
                className="animate-[wave_8s_ease-in-out_infinite_alternate]"
                style={{ animationDelay: '-3s' }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
          <path fill="#FFFFFF" d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>

      {/* Custom animation keyframes to be added to your global CSS */}
    </section>


  )
}


