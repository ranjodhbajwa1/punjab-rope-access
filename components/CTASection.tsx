"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to Elevate Your Building Maintenance?
        </h2>
        <p className="text-lg mb-8 text-gray-100">
          Contact our certified rope access experts today and request your free
          Calgary quote.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Request a Quote
        </Link>
      </motion.div>
    </section>
  );
}
