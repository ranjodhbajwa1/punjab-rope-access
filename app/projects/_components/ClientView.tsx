"use client";
import { motion } from "framer-motion";
import CTASection from "../../../components/CTASection";

const projects = [
  {
    name: "BEVA Inspections at The Westin Downtown Calgary ",
    summary:
      "BEVA inspection conducted at The Westin Hotel in downtown Calgary involved a Building Exterior Visual Assessment of all accessible façade elements using rope access. The inspection focused on identifying structural deterioration, loose materials, cracks, and potential safety hazards on the building envelope. Technicians documented conditions through high-resolution photographs and detailed notes for each elevation. Findings will be compiled into a report with repair recommendations to maintain façade integrity and compliance with Calgary’s building safety standards.",
    /* img: "/images/project-tower.jpg", */
  },
  {
    name: "Window Cleaning At Sunlife Plaza at 4th Ave SW Calgary",
    summary:
      "Window cleaning at Sun Life Plaza, 4th Avenue SW, Calgary, was completed using industrial rope access methods to safely reach all high-rise glass façades. The scope included thorough exterior cleaning of curtain walls, frames, and spandrels to remove dirt, mineral deposits, and construction residue. The project was executed with minimal disruption to building operations, following safety protocols and weather considerations. The result restored full glass clarity and enhanced the building’s professional appearance in Calgary’s downtown core.",
    /* img: "/images/project-beltline.jpg", */
  },
  {
    name: "Painting at Waterfront Condo's",
    summary:
      "Restoration and painting work at Waterfront Condos, Calgary, involved a full façade maintenance project carried out using rope access. The scope included surface preparation, crack repairs, sealant replacement, and application of high-performance exterior coatings to protect against moisture and UV damage. All work was performed at height with minimal impact on residents and surroundings. The project restored the building’s appearance, extended the service life of exterior materials, and ensured long-term durability against Calgary’s weather conditions.",
    /* img: "/images/project-residential.jpg", */
  },
];

export default function ClientView() {
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
              {/* only remove when you have pictures for projects
              <img
                src={p.img}
                alt={p.name}
                className="h-56 w-full object-cover"
              />
              */}
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
