"use client";
import { motion } from "framer-motion";
import CTASection from "../../../components/CTASection";

export default function ClientView() {
  return (
    <div className="bg-white text-gray-900">
      <section className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Punjab Rope Access
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-8 leading-relaxed text-gray-700 text-center"
        >
          Calgary-based rope-access company providing certified high-rise
          maintenance solutions. IRATA-trained technicians for window cleaning,
          anchor inspections, and façade repairs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-10"
        >
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Certified Team</h3>
            <p className="text-gray-600">
              IRATA-certified technicians with years of high-rise experience.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Safety First</h3>
            <p className="text-gray-600">
              Full compliance with industrial rope-access safety protocols.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Local Expertise</h3>
            <p className="text-gray-600">
              Based in Calgary and serving Alberta’s property managers.
            </p>
          </div>
        </motion.div>
      </section>
      <CTASection />
    </div>
  );
}
