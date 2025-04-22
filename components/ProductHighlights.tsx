"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Droplets, Leaf, ThermometerSnowflake } from "lucide-react"

export default function ProductHighlights() {
  const features = [
    {
      icon: <ThermometerSnowflake className="w-8 h-8 text-primary-dark" />,
      title: "Temperature Control",
      description: "Keep drinks cold for 24 hours or hot for 12 hours with our vacuum insulation technology.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary-dark" />,
      title: "Eco-Friendly",
      description: "Made from sustainable materials and built to last, reducing single-use plastic waste.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary-dark" />,
      title: "Leak-Proof Design",
      description: "Our secure lid ensures your bag stays dry and your drink stays where it belongs.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Signature Product
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 blue-gradient mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover our premium eco-friendly water bottle, designed for every lifestyle and adventure.
          </motion.p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md group"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Vasukhi Water Bottle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 blue-gradient text-white text-sm font-medium px-3 py-1 rounded-full">
                Signature
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Vasukhi Classic</h3>
              <p className="text-primary-dark font-semibold mb-4">$34.99</p>
              <Link
                href="/products"
                className="inline-block w-full text-center bg-gray-100 hover:bg-gradient-to-r hover:from-primary-dark hover:to-primary-light hover:text-white transition-colors py-2 rounded-md font-medium"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-dark/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-block blue-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
