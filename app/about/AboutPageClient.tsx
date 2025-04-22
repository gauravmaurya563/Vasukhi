"use client"

import Image from "next/image"
import { MotionDiv } from "@/components/MotionComponents"

export default function AboutPageClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Story</h1>
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
              src="/placeholder.svg?height=800&width=600"
              alt="People enjoying Vasukhi bottles outdoors"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Founded with Purpose</h2>
            <p className="text-gray-700 mb-4">
              Vasukhi was born in 2015 from a simple observation: the world didn't need more plastic waste. Our founder,
              an avid outdoor enthusiast, was tired of seeing single-use plastic bottles littering beautiful natural
              spaces.
            </p>
            <p className="text-gray-700">
              What started as a small project has grown into a mission-driven company dedicated to providing sustainable
              hydration solutions without compromising on design or functionality.
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
            To create a beautiful, functional hydration product that inspires people to reduce single-use plastic
            consumption while supporting global clean water initiatives.
          </p>
        </MotionDiv>

        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="w-16 h-1 blue-gradient mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Sustainability",
              description:
                "Every product we create is designed with its environmental impact in mind, from materials to manufacturing to end-of-life.",
              icon: "🌱",
            },
            {
              title: "Innovation",
              description:
                "We're constantly exploring new materials, technologies, and designs to create better products with less environmental impact.",
              icon: "💡",
            },
            {
              title: "Transparency",
              description:
                "We believe in honest communication about our products, processes, and progress toward our sustainability goals.",
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
          <h2 className="text-2xl font-bold mb-4 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-dark mb-2">1.2M+</p>
              <p className="text-gray-600">Plastic bottles saved annually</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-dark mb-2">$250K</p>
              <p className="text-gray-600">Donated to clean water projects</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-dark mb-2">100%</p>
              <p className="text-gray-600">Carbon-neutral operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
