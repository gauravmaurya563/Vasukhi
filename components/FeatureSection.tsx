"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FeatureSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Adventure</h2>
            <div className="w-20 h-1 blue-gradient mb-6"></div>
            <p className="text-gray-600 mb-6">
              Our bottle is engineered to withstand the rigors of your active lifestyle. From mountain trails to office
              meetings, the Vasuki bottle keeps your drinks at the perfect temperature while looking great.
            </p>
            <ul className="space-y-4">
              {[
                "Leak-proof guarantee",
                "BPA-free materials",
                "Dishwasher safe",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <svg className="w-5 h-5 text-primary-dark mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="/3Bottle.png"
              alt="Vasukhi bottle features"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] order-2 md:order-1"
          >
            <Image
              src="/3Bottle1.png"
              alt="Vasukhi sustainability"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

         <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="order-1 md:order-2"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Sustainable Values</h2>
  <div className="w-20 h-1 blue-gradient mb-6"></div>
  <p className="text-gray-600 mb-6">
    Sustainability isn’t just a promise — it’s part of everything we do. Every Vasuki bottle is thoughtfully crafted to reduce environmental impact and support long-term ecological balance.
  </p>
  <div className="space-y-6">
    {[
      {
        title: "Recyclable by Design",
        description: "Our bottles are made from high-quality, fully recyclable materials to ensure they stay in use and out of landfills.",
      },
      {
        title: "Carbon Balanced Operations",
        description: "We actively track and offset emissions from manufacturing and logistics, aiming to minimize our carbon footprint.",
      },
      {
        title: "Giving Back to Nature",
        description:
          "Through our partnership with 1% for the Planet, we contribute a portion of every sale to grassroots organizations protecting our environment.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 * index }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}
