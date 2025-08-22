"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#F5F5DC] dark:bg-[#8B7355]">
      {/* Section Divider */}
      <div className="pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="w-2 h-2 bg-[#A8B5A0] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-6 font-elegant">
            Get in Touch
          </h2>
          <p className="text-xl text-[#A8B5A0] dark:text-[#F5F5DC] max-w-3xl mx-auto font-classic leading-relaxed">
            Have questions about our literary society? Want to join our community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
              <h3 className="text-2xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-6 font-elegant">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#8B7355] dark:text-[#F5F5DC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B7355] dark:text-[#F5F5DC] font-elegant">Email</h4>
                    <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">litableau@annauniv.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#8B7355] dark:text-[#F5F5DC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B7355] dark:text-[#F5F5DC] font-elegant">Phone</h4>
                    <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">+91 44 2235 7000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#8B7355] dark:text-[#F5F5DC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B7355] dark:text-[#F5F5DC] font-elegant">Location</h4>
                    <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">
                      College of Arts & Sciences<br />
                      Anna University, Chennai
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#8B7355] dark:text-[#F5F5DC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B7355] dark:text-[#F5F5DC] font-elegant">Office Hours</h4>
                    <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <h3 className="text-2xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-6 font-elegant">
              Send us a Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-classic">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#A8B5A0] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-[#F5F5DC] dark:bg-[#8B7355] text-[#8B7355] dark:text-[#F5F5DC] font-classic"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-classic">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#A8B5A0] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-[#F5F5DC] dark:bg-[#8B7355] text-[#8B7355] dark:text-[#F5F5DC] font-classic"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-classic">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#A8B5A0] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-[#F5F5DC] dark:bg-[#8B7355] text-[#8B7355] dark:text-[#F5F5DC] font-classic"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-classic">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#A8B5A0] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-[#F5F5DC] dark:bg-[#8B7355] text-[#8B7355] dark:text-[#F5F5DC] font-classic resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B7355] text-[#F5F5DC] py-3 px-6 rounded-lg hover:bg-[#D4A574] transition-colors duration-200 font-semibold font-elegant flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="w-2 h-2 bg-[#A8B5A0] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
