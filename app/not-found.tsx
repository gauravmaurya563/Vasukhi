import Link from "next/link"
import { MotionDiv } from "@/components/MotionComponents"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold blue-gradient-text">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Oops! It looks like you've wandered into uncharted waters. The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block blue-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Return to Home
        </Link>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Looking for something specific?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products" className="text-primary-dark hover:underline">
            Browse Products
          </Link>
          <Link href="/about" className="text-primary-dark hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="text-primary-dark hover:underline">
            Contact Support
          </Link>
        </div>
      </MotionDiv>
    </div>
  )
}
