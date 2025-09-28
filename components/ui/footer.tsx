"use client";
import React from "react";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[rgb(23,58,43)] text-[#f5f5dc]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-[#f5f5dc]" />
              <span className="text-2xl font-bold font-elegant">LITABLEAU</span>
            </div>
            <p className="text-[#f5f5dc] mb-6 font-classic leading-relaxed">
              The Literary Society of Anna University, fostering creativity, critical thinking, and a love for literature 
              among students. Join our community of writers, poets, and literature enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center hover:bg-[#f5f5dc]/80 transition-colors">
                <Facebook className="h-5 w-5 text-[rgb(23,58,43)]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center hover:bg-[#f5f5dc]/80 transition-colors">
                <Twitter className="h-5 w-5 text-[rgb(23,58,43)]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center hover:bg-[#f5f5dc]/80 transition-colors">
                <Instagram className="h-5 w-5 text-[rgb(23,58,43)]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#f5f5dc] rounded-full flex items-center justify-center hover:bg-[#f5f5dc]/80 transition-colors">
                <Linkedin className="h-5 w-5 text-[rgb(23,58,43)]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-elegant">Quick Links</h3>
            <ul className="space-y-2 font-classic">
              <li><a href="/" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors">About</a></li>
              <li><a href="/events" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors">Events</a></li>
              <li><a href="/gallery" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-elegant">Contact Info</h3>
            <ul className="space-y-2 font-classic">
              <li className="flex items-center space-x-2 text-[#f5f5dc]">
                <Mail className="h-4 w-4 text-[#f5f5dc]" />
                <span>litableau@annauniv.edu</span>
              </li>
              <li className="flex items-center space-x-2 text-[#f5f5dc]">
                <Phone className="h-4 w-4 text-[#f5f5dc]" />
                <span>+91 44 2235 7000</span>
              </li>
              <li className="flex items-center space-x-2 text-[#f5f5dc]">
                <MapPin className="h-4 w-4 text-[#f5f5dc]" />
                <span>Anna University, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f5f5dc] mt-8 pt-8 text-center">
          <p className="text-[#f5f5dc] font-classic">
            © 2025 LITCLUB - Literary Society of Anna University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
