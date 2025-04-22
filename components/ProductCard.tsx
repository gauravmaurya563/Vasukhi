"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProductProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    features: string[]
    colors: string[]
    description: string
  }
}

export default function ProductCard({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-primary-dark font-semibold mb-3">${product.price}</p>
        <p className="text-gray-600 mb-4 flex-1">{product.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Features:</h4>
          <ul className="text-sm text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start mb-1">
                <svg className="w-4 h-4 text-primary-dark mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Available Colors:</h4>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <span key={index} className="text-sm text-gray-600">
                {color}
                {index < product.colors.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="w-full text-center blue-gradient text-white py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
