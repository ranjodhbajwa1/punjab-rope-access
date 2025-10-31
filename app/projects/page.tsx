/*
export const metadata = {
  title: "Projects | Punjab Rope Access Calgary",
  description:
    "View recent Calgary rope access, window cleaning, and maintenance projects completed by Punjab Rope Access.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <p className="text-lg mb-6">
          Here are a few recent high-rise maintenance and rope access projects
          our Calgary team has completed. More visuals and case studies coming
          soon.
        </p>
        <ul className="list-disc ml-6 text-lg">
          <li>Downtown Calgary Tower – Full facade window cleaning</li>
          <li>Beltline Office Complex – Annual anchor inspection</li>
          <li>Residential High-Rise – Pressure washing and caulking</li>
        </ul>
      </div>
    </section>
  );
}
  */

"use client";
import { motion } from "framer-motion";
import CTASection from "../../components/CTASection";

export const metadata = {
  title: "Projects | Punjab Rope Access Calgary",
  description:
    "Recent Calgary rope access projects including window cleaning, anchor inspections, and facade maintenance by Punjab Rope Access.",
};

const projects = [
  {
    name: "Downtown Calgary Tower",
    summary:
      "Full facade high-rise window cleaning project completed within three days with zero safety incidents.",
    img: "/images/project-tower.jpg",
  },
  {
    name: "Beltline Office Complex",
    summary:
      "Anchor inspection and BEVA testing for a 25-storey building following CSA Z91 compliance.",
    img: "/images/project-beltline.jpg",
  },
  {
    name: "Residential High-Rise",
    summary:
      "Comprehensive exterior caulking and pressure washing to restore facade appearance and seal integrity.",
    img: "/images/project-residential.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Recent Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          Our Calgary team has completed rope access, anchor inspection, and
          high-rise maintenance projects for leading property managers across
          Alberta. Each job demonstrates our safety, efficiency, and precision.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
