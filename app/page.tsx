"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Mail, Star } from "lucide-react"

export default function MakeupBlenderLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span className="text-rose-600 text-sm font-medium">FOUNDATION KILLER ALERT</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Your makeup sponge is{" "}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">ruining</span>{" "}
              your $50 foundation
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop throwing money down the drain. Every squeeze of that cheap sponge is literally absorbing your
              expensive makeup into a black hole of waste.
            </p>
          </div>

          {/* Product Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50 rounded-3xl p-8 border border-white/50 backdrop-blur-sm shadow-xl">
                <Image
                  src="/images/makeup-blender.png"
                  alt="Premium Terracotta Makeup Blender - The Foundation Saver"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-3 shadow-lg">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge
                  variant="secondary"
                  className="bg-purple-100/80 text-purple-700 border-purple-200/50 mb-4 backdrop-blur-sm"
                >
                  PREMIUM GRADE
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                  The Foundation Saver™
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Engineered with revolutionary non-absorbent technology that applies your foundation flawlessly while
                  using 70% less product. Your $50 bottle will finally last more than 3 weeks.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Zero foundation absorption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Seamless, streak-free application</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Saves 70% more product per use</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Easy to clean, bacteria-resistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-rose-50/50 via-purple-50/50 to-pink-50/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
            The Expensive Truth About Cheap Sponges
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-rose-50/80 border-rose-200/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="text-rose-500 text-4xl font-bold mb-4">$200+</div>
                <h4 className="text-xl font-semibold mb-3 text-rose-700">Wasted Per Month</h4>
                <p className="text-gray-600">
                  Traditional sponges absorb up to 60% of your foundation, literally drinking your expensive makeup and
                  forcing you to buy more.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50/80 border-emerald-200/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="text-emerald-500 text-4xl font-bold mb-4">$50</div>
                <h4 className="text-xl font-semibold mb-3 text-emerald-700">Saved Per Month</h4>
                <p className="text-gray-600">
                  The Foundation Saver™ uses advanced materials that repel absorption, making your foundation last 3x
                  longer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Out of Stock / Email Capture */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-100/80 via-pink-100/80 to-blue-100/80 rounded-3xl p-8 border border-white/50 backdrop-blur-sm shadow-xl">
            <Badge variant="destructive" className="mb-6 text-lg px-4 py-2 bg-rose-100 text-rose-700 border-rose-200">
              TEMPORARILY OUT OF STOCK
            </Badge>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              Don't Miss the Restock
            </h3>

            <p className="text-gray-600 text-lg mb-8">
              Join 2,847 people who refuse to waste another drop of expensive foundation. Be the first to know when
              we're back in stock.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/70 border-purple-200/50 text-gray-700 placeholder:text-gray-500 h-12 backdrop-blur-sm"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 h-12 px-8 shadow-lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </div>
                <p className="text-sm text-gray-500">We'll only email you when it's back in stock. No spam, ever.</p>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-emerald-600">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-semibold">You're on the list!</span>
                </div>
                <p className="text-gray-600">We'll email you the moment The Foundation Saver™ is back in stock.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-16 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
            What Makeup Artists Are Saying
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 border-purple-200/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Finally, a sponge that doesn't steal my client's expensive foundation. Game changer."
                </p>
                <div className="text-sm text-gray-500">- Sarah M., Celebrity MUA</div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 border-purple-200/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My $60 foundation bottle lasted 2 months instead of 3 weeks. Do the math."
                </p>
                <div className="text-sm text-gray-500">- Jessica L., Beauty Influencer</div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 border-purple-200/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I was literally pouring money down the drain with regular sponges. Never again."
                </p>
                <div className="text-sm text-gray-500">- Maria R., Makeup Enthusiast</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-purple-200/30">
        <div className="max-w-4xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Foundation Saver™. Stop wasting your expensive makeup.</p>
        </div>
      </footer>
    </div>
  )
}
