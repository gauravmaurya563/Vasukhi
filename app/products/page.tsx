import type { Metadata } from "next"
import ProductCard from "@/components/ProductCard"
import { MotionDiv } from "@/components/MotionComponents"

export const metadata: Metadata = {
  title: "Our Product",
  description: "Explore Vasuki's premium eco-friendly water bottle for every lifestyle.",
}

const product = {
  id: 1,
  name: "Vasuki Classic",
  image: "/New Look.png",
  features: ["Vacuum insulated", "24-hour cold / 12-hour hot", "500ml capacity", "Stainless steel"],
  colors: ["Silver", "Black", "Ocean Blue"],
  description:
    "Our signature insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. Perfect for everyday adventures.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Product</h1>
        <div className="w-20 h-1 blue-gradient mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover our premium eco-friendly water bottle designed for every lifestyle. Each bottle is crafted with
          sustainable materials and built to last.
        </p>

        <div className="max-w-md mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </MotionDiv>
        </div>

        <div className="mt-20 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Materials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-3">Stainless Steel</h3>
              <p className="text-gray-600">
                Our premium 18/8 food-grade stainless steel is durable, doesn't transfer flavors, and is 100%
                recyclable.
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-3">Tritan™ Plastic</h3>
              <p className="text-gray-600">
                When we use plastic, we choose Tritan™ which is BPA-free, durable, and dishwasher safe.
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-3">Bamboo</h3>
              <p className="text-gray-600">
                Our cap features sustainably harvested bamboo, a rapidly renewable resource that adds natural beauty.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">Our team is here to help you with any questions about our product.</p>
          <a
            href="/contact"
            className="inline-block blue-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
