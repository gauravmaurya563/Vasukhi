import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { MotionDiv } from "@/components/MotionComponents"

export const metadata: Metadata = {
  title: "Contact Vasukhi",
  description: "Reach out to the Vasukhi Water team for support, queries, and business opportunities.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get in Touch with Vasukhi</h1>
        <div className="w-20 h-1 blue-gradient mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you have a question, want to partner with us, or need assistance — we're here for you. Connect with the Vasukhi team anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </MotionDiv>

          {/* Contact Information */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-dark mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    ATAJI MAFAJI THAKOR<br />
                    SUR NO-362/2<br />
                    OPP. SWAGAT PARK BUNGLOWS,<br />
                    B/H. SURAJ BUNGLOW, THALTEJ<br />
                    AHMEDABAD, Gujarat, India
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-dark mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold mb-1">Customer Care</h3>
                  <p className="text-gray-600">+91 81418 05858</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-dark mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">aayalbeverages@gmail.com</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/vasuki_water?utm_source=qr&igsh=MWdmMnJwc2k4b2F1ag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-dark transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-dark transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-dark transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Always Open */}
              <div className="mt-8 bg-primary-light text-primary-dark p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">We’re Always Here for You</h3>
                <p className="text-gray-800 leading-relaxed">
                  Vasukhi is always just a message away — whether it’s late at night or early morning.
                  Our team is available 24/7 for any queries, feedback, or urgent assistance.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>✔️ 24/7 Support, No Matter the Time</li>
                  <li>✔️ Fast Response via Email & Socials</li>
                  <li>✔️ Real People. Real Help. Always.</li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I clean my Vasukhi bottle?",
                answer: "We recommend washing with warm, soapy water. The bottle is also top-rack dishwasher safe.",
              },
              {
                question: "Is the Vasukhi bottle leak-proof?",
                answer: "Yes, it features a secure and tested leak-proof cap design.",
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we offer global shipping with region-specific delivery times.",
              },
              {
                question: "Is your packaging eco-friendly?",
                answer: "Absolutely! Our bottles are BPA-free and made from recyclable materials.",
              },
            ].map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
