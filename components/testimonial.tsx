import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "./ui/badge"
export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 flex justify-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-xs">
              ✨ Testimoni Klien ✨
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Dont just take our word for it. Here`s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6">
              &quot;Working with this team was a game-changer for our business. They delivered a stunning website that
              has significantly increased our conversions and customer engagement.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  width={100}
                  height={100}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6">
              &quot;The teams technical expertise and attention to detail exceeded our expectations. Our e-commerce
              platform is now faster, more secure, and driving more sales than ever before.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  width={100}
                  height={100}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-sm text-gray-500">CTO, ShopWave</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6">
              &quot;From concept to launch, the development process was smooth and transparent. They took our vision and
              transformed it into a beautiful, functional website that our customers love.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  width={100}
                  height={100}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Emily Rodriguez</h4>
                <p className="text-sm text-gray-500">Marketing Director, Elevate Media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
