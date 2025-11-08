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
              Our IRATA-certified technicians bring professional expertise to every project, ensuring safe and efficient rope access operations.
              Each team member is trained, qualified, and compliant with industry safety regulations and best practices.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Safety First</h3>
            <p className="text-gray-600">
              Full compliance with industrial rope-access safety protocols.
              Safety is our top priority on every job, from planning to execution.
              We follow strict IRATA and OH&S standards to ensure a controlled, risk-free work environment.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Local Expertise</h3>
            <p className="text-gray-600">
              Based in Calgary and serving Alberta’s property managers.
              We understand the city’s building structures, weather, and maintenance needs.
              Our local expertise ensures reliable service tailored to Calgary’s unique conditions and regulations.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Fully Insured</h3>
            <p className="text-gray-600">
              We are fully insured and certified, ensuring every project meets the highest safety and compliance standards.
              Your property and our team are protected under comprehensive liability
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">WCB Compliant</h3>
            <p className="text-gray-600">
              We are fully WCB compliant, ensuring every technician is protected under workplace safety coverage.
              Our operations meet Alberta’s Workers’ Compensation Board standards for incident prevention and accountability.
              This commitment guarantees safe, transparent, and professional service on every project.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Professional & Reliable</h3>
            <p className="text-gray-600">
              We deliver consistent, high-quality results with a focus on professionalism and punctuality.
              Clients trust us for clear communication, dependable scheduling, and attention to detail.
              Our reputation is built on reliability and long-term client satisfaction.
            </p>
          </div>
        </motion.div>
      </section>
      <CTASection />
    </div>
  );
}
