import Link from "next/link"
import { Button } from "./ui/button"
import MySVG from "./logo"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 group overflow-hidden">
            <div className="w-20 transition-transform duration-300 group-hover:translate-x-16">
              <MySVG />
            </div>
            <span className="font-bold transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:-translate-x-4">
              Jagad Web
            </span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="#seo-features" className="text-sm font-medium transition-colors hover:text-primary">
              SEO Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
