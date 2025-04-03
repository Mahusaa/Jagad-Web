"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import MySVG from "./logo"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Track scroll position and direction
  useEffect(() => {
    if (typeof window === "undefined") return

    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollPosition(currentScrollY)

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((currentScrollY / scrollHeight) * 100)

      // Navbar visibility logic
      if (currentScrollY < 100) {
        setVisible(true)
      } else if (!isHovering) {
        setVisible(currentScrollY < lastScrollY)
        if (currentScrollY > lastScrollY) setMobileMenuOpen(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHovering])

  // Detect if we're on mobile
  useEffect(() => {
    if (typeof window === "undefined") return

    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <>
      {/* Hover detection zone - only active on desktop */}
      {!isMobile && scrollPosition > 100 && (
        <div
          className="fixed top-0 left-0 right-0 h-16 z-40 bg-transparent"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      )}

      {/* Floating Oval Navigation */}
      <div
        className={`fixed top-4 left-0 right-0 z-50 mx-auto px-4 transition-transform duration-300 ease-in-out ${visible || isHovering ? "translate-y-0" : "-translate-y-24"
          }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <header className="mx-auto max-w-5xl rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20">
          <div className="flex h-14 items-center justify-between px-6">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
                  <MySVG />
                </div>
                <span className="text-lg font-bold">JagadWeb</span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                  Product
                </Link>
                <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                  Solution
                </Link>
                <Link href="#stats" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                  Resources
                </Link>
                <Link href="#footer" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              <button
                className="md:hidden flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5 text-gray-600" /> : <Menu className="h-5 w-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-auto max-w-5xl rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 p-4 animate-in fade-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-3">
              {["Product", "Solution", "Resources", "Pricing", "Login"].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div
        className={`fixed top-0 left-0 right-0 h-1 z-40 transition-opacity duration-300 ${scrollPosition > 100 && !visible && !isHovering ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="h-full bg-blue-600" style={{ width: `${scrollProgress}%` }} />
      </div>
    </>
  )
}

