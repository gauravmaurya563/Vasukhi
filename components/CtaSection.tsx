"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join the Movement for a Plastic-Free Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8"
          >
            Every Vasukhi bottle purchased helps reduce single-use plastic waste and supports our clean water
            initiatives around the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/products"
              className="bg-white text-primary-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
