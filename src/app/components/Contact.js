"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "furqankhanku@gmail.com",
    href: "mailto:furqankhanku@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+92 333 1234567",
    href: "tel:+923331234567",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mwvapkbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        alert("Failed to send message: " + (errorData.error || "Please try again."));
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Error sending message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "+03312832363"; 
  const whatsappMessage = encodeURIComponent("Hi! I saw your portfolio and I'd like to discuss a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#f5f5f5]/70 text-lg">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-[#f5f5f5]/70 mb-8">
              Feel free to reach out through any of these channels. I typically respond within
              24 hours.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#6366f1]/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center group-hover:from-[#6366f1]/30 group-hover:to-[#8b5cf6]/30 transition-all text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-[#f5f5f5]/60">{item.label}</div>
                    <div className="text-[#f5f5f5]">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="text-2xl">💬</span> Chat on WhatsApp
            </a>
          </div>

          <div className="gradient-border p-8 relative z-20 pointer-events-auto">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✓
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-[#f5f5f5]/70 mb-4">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#6366f1] text-white text-sm hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pointer-events-auto">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#f5f5f5]/70 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        console.log("Name changed:", e.target.value);
                        handleChange(e);
                      }}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#f5f5f5]/30 focus:border-[#6366f1] focus:outline-none transition-colors"
                      placeholder="Ali Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#f5f5f5]/70 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#f5f5f5]/30 focus:border-[#6366f1] focus:outline-none transition-colors"
                      placeholder="alikhan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#f5f5f5]/70 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#f5f5f5]/30 focus:border-[#6366f1] focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#f5f5f5]/70 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#f5f5f5]/30 focus:border-[#6366f1] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 pointer-events-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
