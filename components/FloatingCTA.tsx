"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
    >
      {/* Call */}
      <a
        href="tel:+16044018792"
        className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
        aria-label="Call Punjab Rope Access"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/16044018792"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {/* Quote */}
      <Link
        href="/contact"
        className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        aria-label="Request a Quote"
      >
        <FileText size={22} />
      </Link>
    </motion.div>
  );
}
