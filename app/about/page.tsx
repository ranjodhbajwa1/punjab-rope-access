/* export const metadata = {
  title: "About Punjab Rope Access | Calgary Rope Access Experts",
  description:
    "Learn about Punjab Rope Access — Calgary’s trusted IRATA-certified team for rope access, anchor inspection, and high-rise maintenance.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Punjab Rope Access</h1>
        <p className="text-lg mb-6">
          We are a Calgary-based rope access company providing safe, efficient,
          and certified solutions for high-rise maintenance. Our IRATA-trained
          technicians specialize in window cleaning, anchor inspections, and
          facade repairs for commercial properties.
        </p>
        <p className="text-lg">
          With a focus on safety, professionalism, and results, we serve
          property managers and building owners across Alberta.
        </p>
      </div>
    </section>
  );
}
*/
"use client";
import { motion } from "framer-motion";
import CTASection from "../../components/CTASection";

export const metadata = {
  title: "About Punjab Rope Access | Calgary Rope Access Experts",
  description:
    "Learn about Punjab Rope Access — Calgary’s trusted IRATA-certified team for rope access, anchor inspection, and high-rise maintenance.",
};

export default function AboutPage() {
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
          We are a Calgary-based rope access company providing safe, efficient,
          and certified solutions for high-rise maintenance. Our IRATA-trained
          technicians specialize in window cleaning, anchor inspections, and
          facade repairs for commercial properties.
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
              Strict compliance with industrial rope access safety protocols.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Local Expertise</h3>
            <p className="text-gray-600">
              Based in Calgary, proudly serving Alberta’s property managers.
            </p>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
}
