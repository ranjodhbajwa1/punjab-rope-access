"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) setSubmitted(true);
  }

  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Request a Quote</h2>
        <p className="text-gray-400 mb-10">
          Fill in your details and we’ll get back to you within 24 hours.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqayyena"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"

            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"

            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="p-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"

            />
            <textarea
              name="message"
              placeholder="Project Details"
              required
              rows={5}
              className="p-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"

            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-400 mt-6 text-lg font-medium">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
}
