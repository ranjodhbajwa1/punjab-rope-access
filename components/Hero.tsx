"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Calgary’s Rope Access & High-Rise Experts
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10"
      >
        Professional high-rise window cleaning, pressure washing, and building
        maintenance by certified IRATA technicians.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
  href="/services"
  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
>
  View Our Services
</Link>

      </motion.div>
    </section>
  );
}
