"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("Sorry, something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#e1d5c9] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e1d5c9]/90 via-[#e1d5c9]/80 to-[#e1d5c9]/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#642a38] mb-6 font-elegant">
            Get in Touch
          </h2>
          <p className="text-xl text-[#642a38] max-w-3xl mx-auto font-classic leading-relaxed">
            Have questions about our literary society? Want to join our community?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 rounded-2xl p-6 border border-[#ab958a]/30 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#642a38] mb-6 font-elegant">
                Contact Information
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Mail, title: "Email", value: "litclubau@gmail.com" },
                  { icon: Phone, title: "Phone", value: "+91 98407 90675" },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: (
                      <>
                        College of Engineering, Guindy
                        <br />
                        Anna University, Chennai
                      </>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    value: "Monday - Friday: 9:00 AM - 5:00 PM",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ab958a]/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-[#642a38]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#642a38] font-elegant">
                        {item.title}
                      </h4>
                      <p className="text-[#642a38] font-classic">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 rounded-2xl p-6 border border-[#ab958a]/30 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#642a38] mb-6 font-elegant">
              Send us a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
                { id: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-[#642a38] mb-2 font-classic"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-[#ab958a]/30 rounded-lg focus:ring-2 focus:ring-[#642a38] bg-white text-[#642a38] font-classic"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#642a38] mb-2 font-classic"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border border-[#ab958a]/30 rounded-lg focus:ring-2 focus:ring-[#642a38] bg-white text-[#642a38] font-classic resize-none"
                />
              </div>

              {status !== "idle" && (
                <p className={`text-sm font-classic ${status === "success" ? "text-green-700" : "text-red-700"}`}>
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#642a38] text-[#ece8df] py-3 px-6 rounded-lg hover:bg-[#642a38]/90 transition-colors duration-200 font-semibold font-elegant flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
