"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Droplets, Leaf, ShieldCheck } from "lucide-react"

export default function ProductHighlights() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-dark" />,
      title: "10-Step Purification",
      description: "Every drop goes through rigorous multi-stage purification, ensuring safe and pure water you can trust.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary-dark" />,
      title: "With Added Minerals",
      description: "Enriched with essential minerals such as magnesium and potassium for a refreshing taste and wellness benefits.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary-dark" />,
      title: "Stringent Quality Checks",
      description: "Each bottle passes over 90 quality tests and is contactlessly filled, sealed, and packed for your safety.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
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
            Discover the pure taste of expertly purified drinking water, enhanced with minerals for health and crisp refreshment.
          </motion.p>
        </div>

        {/* Product Card */}
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md group"
          >
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <Image
                src="/VashukiProduct.jpg"
                alt="Vasukhi Water Bottle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute top-4 right-4 blue-gradient text-white text-sm font-medium px-3 py-1 rounded-full">
                Signature
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Vasukhi Classic</h3>
              <Link
                href="/products"
                className="inline-block w-full md:w-auto text-center bg-gray-100 hover:bg-gradient-to-r hover:from-primary-dark hover:to-primary-light hover:text-white transition-colors py-3 px-4 rounded-md font-medium"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

        {/* Learn More Button */}
        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-block blue-gradient text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto hover:opacity-90 transition-opacity"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
