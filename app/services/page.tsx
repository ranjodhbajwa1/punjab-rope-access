/*
export const metadata = {
  title: "Our Services | Punjab Rope Access Calgary",
  description:
    "Explore all rope access services including high-rise window cleaning, anchor inspections, pressure washing, and painting in Calgary.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Our Rope Access Services
        </h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <li>
            <a href="/services/window-cleaning" className="text-red-600 underline font-semibold">
              High-Rise Window Cleaning
            </a>
          </li>
          <li>
            <a href="/services/anchor-inspection" className="text-red-600 underline font-semibold">
              Anchor Inspections
            </a>
          </li>
          <li>
            <a href="/services/pressure-washing" className="text-red-600 underline font-semibold">
              Pressure Washing
            </a>
          </li>
          <li>
            <a href="/services/painting" className="text-red-600 underline font-semibold">
              Painting & Caulking
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
*/

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CTASection from "../../components/CTASection";

export const metadata = {
  title: "Our Services | Punjab Rope Access Calgary",
  description:
    "Explore professional rope access services in Calgary — high-rise window cleaning, anchor inspections, pressure washing, and painting.",
};

const services = [
  {
    title: "High-Rise Window Cleaning",
    desc: "Spotless glass cleaning for commercial towers and condos using IRATA-certified rope access technicians.",
    img: "/images/service-window.jpg",
    href: "/services/window-cleaning",
  },
  {
    title: "Anchor Inspections",
    desc: "Certified testing and annual inspections for building anchor systems in compliance with Alberta safety standards.",
    img: "/images/service-anchor.jpg",
    href: "/services/anchor-inspection",
  },
  {
    title: "Pressure Washing",
    desc: "Low-pressure and high-pressure washing for facades, parkades, and walkways — restoring building exteriors.",
    img: "/images/service-pressure.jpg",
    href: "/services/pressure-washing",
  },
  {
    title: "Painting & Caulking",
    desc: "Exterior caulking and painting for leak prevention, waterproofing, and long-term building protection.",
    img: "/images/service-painting.jpg",
    href: "/services/painting",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Rope Access Services
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={s.img}
                alt={s.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                <Link
                  href={s.href}
                  className="text-red-600 font-semibold underline hover:text-red-700"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
