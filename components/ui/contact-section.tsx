"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[rgb(229,199,177)] relative overflow-hidden">

      
      {/* Elegant Beige Background Effects */}
      <div className="absolute inset-0">
        {/* Main brown background with subtle beige overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(229,199,177)]/90 via-[rgb(229,199,177)]/80 to-[rgb(229,199,177)]/70"></div>
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #F5F5DC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #F5F5DC 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Soft beige circular elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-bl from-[#F5F5DC]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-tr from-[#F5F5DC]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#F5F5DC]/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-tl from-[#F5F5DC]/10 to-transparent rounded-full blur-xl"></div>
        
        {/* Elegant diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform rotate-12"></div>
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform -rotate-8"></div>
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform rotate-15"></div>
        </div>
        
        {/* Subtle corner accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#F5F5DC]/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F5F5DC]/8 to-transparent"></div>
      </div>
      
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f4f4f] mb-6 font-elegant">
            Get in Touch
          </h2>
          <p className="text-xl text-[#2f4f4f] max-w-3xl mx-auto font-classic leading-relaxed">
            Have questions about our literary society? Want to join our community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 rounded-2xl p-6 border border-[#2f4f4f]/20 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#2f4f4f] mb-6 font-elegant">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2f4f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#2f4f4f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f4f4f] font-elegant">Email</h4>
                    <p className="text-[#2f4f4f] font-classic">litableau@annauniv.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2f4f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#2f4f4f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f4f4f] font-elegant">Phone</h4>
                    <p className="text-[#2f4f4f] font-classic">+91 44 2235 7000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2f4f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#2f4f4f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f4f4f] font-elegant">Location</h4>
                    <p className="text-[#2f4f4f] font-classic">
                      College of Engineering , Guindy<br />
                      Anna University, Chennai
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2f4f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#2f4f4f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f4f4f] font-elegant">Office Hours</h4>
                    <p className="text-[#2f4f4f] font-classic">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 rounded-2xl p-6 border border-[#2f4f4f]/20 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#2f4f4f] mb-6 font-elegant">
              Send us a Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2f4f4f] mb-2 font-classic">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-[#2f4f4f]/20 rounded-lg focus:ring-2 focus:ring-[#2f4f4f] focus:border-transparent bg-white text-[#2f4f4f] font-classic"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2f4f4f] mb-2 font-classic">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-[#2f4f4f]/20 rounded-lg focus:ring-2 focus:ring-[#2f4f4f] focus:border-transparent bg-white text-[#2f4f4f] font-classic"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#2f4f4f] mb-2 font-classic">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-[#2f4f4f]/20 rounded-lg focus:ring-2 focus:ring-[#2f4f4f] focus:border-transparent bg-white text-[#2f4f4f] font-classic"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2f4f4f] mb-2 font-classic">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#2f4f4f]/20 rounded-lg focus:ring-2 focus:ring-[#2f4f4f] focus:border-transparent bg-white text-[#2f4f4f] font-classic resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2f4f4f] text-[#F5F5DC] py-3 px-6 rounded-lg hover:bg-[#2f4f4f]/90 transition-colors duration-200 font-semibold font-elegant flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

     
    </section>
  );
}
