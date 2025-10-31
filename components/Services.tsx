"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "High-Rise Window Cleaning",
    desc: "Professional window cleaning for commercial and residential towers.",
    img: "/images/service-window.jpg",
  },
  {
    title: "Anchor Inspections",
    desc: "Certified inspections to keep your building anchor systems compliant.",
    img: "/images/service-anchor.jpg",
  },
  {
    title: "Pressure Washing",
    desc: "Facade, parkade, and surface washing for a spotless finish.",
    img: "/images/service-pressure.jpg",
  },
  {
    title: "Caulking & Painting",
    desc: "Exterior caulking and painting for waterproofing and protection.",
    img: "/images/service-painting.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
