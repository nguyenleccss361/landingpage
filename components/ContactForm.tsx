"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="register" className="section bg-[var(--theme-4)]">
        <div className="container max-w-2xl">
          <div className="bg-[var(--theme-3)] p-8 rounded-lg text-center">
            <h2 className="text-2xl mb-4">Thank you for your response. ✨</h2>
            <p>We&apos;ll be in touch soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="section bg-[var(--theme-4)]">
      <div className="container max-w-2xl">
        <h2 className="text-center mb-8 text-3xl md:text-4xl font-bold">REGISTER HERE!</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-[var(--theme-1)] p-6 md:p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name <span className="text-red-600">(required)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email <span className="text-red-600">(required)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="source" className="block mb-2 font-medium">
              How did you hear about us?
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full"
            >
              <option value="">Select one option</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="TV">TV</option>
              <option value="Radio">Radio</option>
              <option value="Friend or Family">Friend or Family</option>
            </select>
          </div>
          <div>
            <label htmlFor="details" className="block mb-2 font-medium">
              Other Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={6}
              value={formData.details}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
