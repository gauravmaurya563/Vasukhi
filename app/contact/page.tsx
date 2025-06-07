import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { MotionDiv } from "@/components/MotionComponents"

// Update the contact page title and description
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Vasuki team for questions, support, or partnership inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="w-20 h-1 blue-gradient mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions about our products? Want to collaborate? We'd love to hear from you. Fill out the form below or
          reach out directly through our contact information.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-dark mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold mb-1">Our Location</h3>
                  <address className="not-italic text-gray-600">

ATAJI MAFAJI THAKOR                    <br />
SUP NO-362/2.                     <br />
OPP.SWAGT PARK BUNGLOWS,<br />
B/H SURAJ BUNGLOW,
<br />
                    THALTEJ AHMEDABAD,
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-dark mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+918141805858</p>
                </div>
              </div>

              {/* Update the email address */}
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-dark mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">Aayalbeverages@gmail.com</p>
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
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </MotionDiv>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I clean my Vasuki bottle?",
                answer:
                  "We recommend hand washing with warm, soapy water. Our bottle is also dishwasher safe (top rack only).",
              },
              {
                question: "What is your warranty policy?",
                answer: "All Vasuki bottles come with a lifetime warranty against manufacturing defects.",
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes! We ship to most countries worldwide. Shipping rates and delivery times vary by location.",
              },
              {
                question: "Is your bottle leak-proof?",
                answer: "Yes, the Vasuki bottle features a leak-proof lid when properly closed.",
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
