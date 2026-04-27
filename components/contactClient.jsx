"use client";

import ContactInfoCards from "@/utils/contactInfoCards";
import ContactForm from "@/utils/contactForm";

export default function ContactClient() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-20">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400 max-w-xl">
          Have a project, opportunity, or just want to say hi? Feel free to
          reach out — I’m always open to meaningful conversations.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <ContactInfoCards />
        <ContactForm />
      </div>
    </section>
  );
}
