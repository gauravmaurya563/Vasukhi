"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah J.",
      location: "Portland, OR",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "I take my Vasukhi bottle everywhere! It keeps my water cold all day long, even in the summer heat. The design is beautiful and I love knowing I'm reducing plastic waste.",
    },
    {
      name: "Michael T.",
      location: "Denver, CO",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "As an avid hiker, I need gear that can keep up. My Vasukhi bottle has been through some tough trails and still looks and performs perfectly. Worth every penny!",
    },
    {
      name: "Emma L.",
      location: "Austin, TX",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "The Vasukhi bottle is perfect for my yoga classes. It's lightweight, doesn't leak, and I love the minimalist design. Vasukhi has a customer for life!",
    },
    {
      name: "David R.",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "I've tried many water bottles over the years, but Vasukhi is by far the best. The quality is exceptional and I appreciate their commitment to sustainability.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
            What Our Customers Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 blue-gradient mx-auto mb-6"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-dark text-primary-dark" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].text}"</p>
                <div>
                  <p className="font-bold">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary-dark" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
