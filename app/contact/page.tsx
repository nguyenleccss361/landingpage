"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <main className="w-full max-w-full overflow-x-hidden">
        <Header />
        <section className="section bg-[var(--theme-4)]">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Contact
                </h1>
                <div className="space-y-4 text-lg">
                  <p>
                    📧 <strong>Email</strong>:{" "}
                    <strong>
                      <a href="mailto:info@scaters.co.uk" className="hover:underline">
                        info@scaters.co.uk
                      </a>
                    </strong>
                  </p>
                  <p>
                    📞 <strong>Phone</strong>:{" "}
                    <strong>
                      <a href="tel:+442079460958" className="hover:underline">
                        +44 20 7946 0958
                      </a>
                    </strong>
                  </p>
                  <p>
                    🏢 <strong>Address</strong>:<br />
                    Scaters Ltd.<br />
                    123 Scaters Street,<br />
                    Liverpool, L1 1AA,<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg font-bold">SCATERS COMPANY</p>
                
                {submitted ? (
                  <div className="bg-[var(--theme-3)] text-[var(--theme-5)] p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold mb-2">Thank you for your response. ✨</h4>
                    <p>We&apos;ll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 bg-[var(--theme-1)] p-6 md:p-8 rounded-xl shadow-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block mb-2 font-medium">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--theme-5)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--theme-5)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2 font-medium">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--theme-5)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--theme-5)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-[var(--theme-5)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--theme-5)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-[var(--theme-5)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--theme-5)] resize-none"
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
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
