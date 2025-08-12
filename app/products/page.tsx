"use client"

import Image from "next/image"

const product = {
  id: 1,
  name: "Vasukhi Purified Water",
  image: "/image.png", // Make sure this file is in /public
  features: [
    "Multi-stage purification: RO, UV, and ozone treatment",
    "Essential minerals added for taste and health",
    "BPA-free, food-grade hygienic packaging",
    "Sealed directly at the source for purity",
  ],
  description:
    "Vasukhi water undergoes advanced purification and is enriched with minerals for a refreshing taste. Packaged in BPA-free bottles and sealed at the source, it's your trusted companion for safe, clean hydration.",
}

export default function ProductPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">{product.name}</h1>
      <div className="w-16 h-1 blue-gradient mx-auto mb-6"></div>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Experience water the way nature intended — purified with care, enriched with minerals, and delivered in
        sustainable, BPA-free packaging.
      </p>

      <div className="flex flex-col items-center md:flex-row md:gap-10 mb-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={600}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-3">Features</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
