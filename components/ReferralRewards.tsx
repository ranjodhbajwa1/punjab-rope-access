"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ReferralRewards() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Headline + copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intro Pricing & Referral Rewards
          </h2>
          <p className="text-gray-300 mb-4">
            Building manager, contractor, or board member?  
            We’re offering an introductory discount and a simple referral program
            for new Calgary projects.
          </p>

          <div className="space-y-3 text-sm md:text-base">
            <p>
              <span className="font-semibold text-red-400">
                ● Intro Discount:
              </span>{" "}
              10% off your first rope access project for a new building
              (window cleaning, anchor inspection, or facade work).
            </p>
            <p>
              <span className="font-semibold text-green-400">
                ● Referral Gift Cards:
              </span>{" "}
              Refer a building that books a project with us and receive a{" "}
              <span className="font-semibold">$200 - $500 gift card</span> once the
              job is completed.
            </p>
            <p className="text-gray-400">
              Perfect for property managers, condo boards, and construction
              supervisors who connect us with owners or other sites.
            </p>
          </div>
        </motion.div>

        {/* Right: CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-3">
            Ask about discounts on your quote
          </h3>
          <p className="text-gray-300 mb-6">
            Mention <span className="font-semibold">“Intro Pricing”</span> or{" "}
            <span className="font-semibold">“Referral Reward”</span> when you
            contact us and we’ll apply it to your proposal if eligible.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-center text-white py-3 rounded-full font-semibold"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+16044018792"
              className="border border-gray-500 text-center text-gray-100 py-3 rounded-full font-semibold hover:bg-gray-700"
            >
              Call Us – 604-401-8792
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
