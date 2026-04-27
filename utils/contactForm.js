"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);
    setSuccess(true);

    e.target.reset();

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full p-6 sm:p-8 rounded-2xl border border-gray-800 bg-linear-to-br from-gray-900 to-black shadow-lg space-y-5"
    >
      <h3 className="text-xl font-semibold">Send a Message</h3>

      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
      />

      <input
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
      />

      <textarea
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-full font-medium transition ${
          loading
            ? "bg-gray-700 cursor-not-allowed"
            : "bg-white text-black hover:scale-105"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Sending...
          </span>
        ) : success ? (
          "Message Sent ✓"
        ) : (
          "Send Message"
        )}
      </button>
    </motion.form>
  );
}
