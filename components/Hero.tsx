"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Person hiking with Vasukhi bottle"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/30" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Stay Hydrated.
              <br />
              <span className="blue-gradient-text">Save the Planet.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Premium eco-friendly water bottle designed for your active lifestyle. Durable, beautiful, and sustainable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="blue-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative h-[500px]"
          >
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Vasukhi water bottle"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
