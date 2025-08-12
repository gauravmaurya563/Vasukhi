"use client"

import Image from "next/image"
import { MotionDiv } from "@/components/MotionComponents"

export default function AboutPageClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Journey</h1>
        <div className="w-20 h-1 blue-gradient mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/image.png?height=800&width=600"
              alt="Founders of Vasukhi holding bottles near a water stream"
              fill
              className="object-cover"
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Born from a 2024 Dream</h2>
            <p className="text-gray-700 mb-4">
              In the vibrant heart of Gujarat, two brothers — <strong>Umang Brahmbhatt</strong> and <strong>Pratik Brahmbhatt</strong> — saw more than just bottled water.
              They saw an opportunity to redefine what hydration means in India.
            </p>
            <p className="text-gray-700">
              Launched in 2024, <strong>Vasukhi</strong> was created not as a brand, but a movement — a blend of tradition and innovation.
              Inspired by the purity of nature and driven by purpose, Vasukhi is here to offer hydration that’s clean, conscious, and iconic.
            </p>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="w-16 h-1 blue-gradient mx-auto mb-8"></div>
          <p className="text-gray-700 text-center max-w-2xl mx-auto text-lg">
            To deliver India’s most trusted hydration experience — clean, fresh, and future-ready. We’re building a
            legacy that quenches thirst while preserving the planet.
          </p>
        </MotionDiv>

        <h2 className="text-3xl font-bold mb-6 text-center">What We Stand For</h2>
        <div className="w-16 h-1 blue-gradient mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Purity First",
              description:
                "Every drop meets the highest standards of purity, tested and certified — because trust is everything.",
              icon: "💧",
            },
            {
              title: "Next-Gen Packaging",
              description:
                "We use innovative, eco-conscious bottles designed for both style and sustainability.",
              icon: "♻️",
            },
            {
              title: "Bold Transparency",
              description:
                "From source to shelf, we’re clear about what’s inside — and what impact it leaves behind.",
              icon: "🔍",
            },
          ].map((value, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </MotionDiv>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Impact So Far</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-dark mb-2">2.5M+</p>
              <p className="text-gray-600">Bottles delivered with zero compromise on quality</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-dark mb-2">₹1Cr+</p>
              <p className="text-gray-600">Invested in eco-safe packaging and logistics</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-dark mb-2">100%</p>
              <p className="text-gray-600">Made in India — proudly and sustainably</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
