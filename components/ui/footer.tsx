"use client";
import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#642a38] text-[#ece8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-[#ece8df]" />
              <span className="text-2xl font-bold font-elegant">LITABLEAU</span>
            </div>
            <p className="text-[#ece8df] mb-6 font-classic leading-relaxed">
              The Literary Society of Anna University, fostering creativity,
              critical thinking, and a love for literature among students.
              Join our community of writers, poets, and literature enthusiasts.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              {[
                {
                  href: "https://www.instagram.com/litclubau?igsh=N3doa20xZnRhMnZs",
                  icon: Instagram,
                },
                {
                  href: "https://chat.whatsapp.com/Ff8kpU0z2sh0c3O9XJJdyL?mode=ac_t",
                  icon: MessageCircle,
                },
                {
                  href: "https://www.linkedin.com/company/literary-club-of-anna-university/",
                  icon: Linkedin,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#ece8df] rounded-full flex items-center justify-center hover:bg-[#ab958a]/80 transition-colors"
                >
                  <item.icon className="h-5 w-5 text-[#642a38]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-elegant">
              Quick Links
            </h3>
            <ul className="space-y-2 font-classic">
              {[
                { href: "/", label: "Home" },
                { href: "/aboutus", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Meet Us" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#ece8df] hover:text-[#ab958a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-elegant">
              Contact Info
            </h3>
            <ul className="space-y-2 font-classic">
              <li className="flex items-center space-x-2 text-[#ece8df]">
                <Mail className="h-4 w-4 text-[#ece8df]" />
                <span>litclubau@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-[#ece8df]">
                <Phone className="h-4 w-4 text-[#ece8df]" />
                <span>+91 98407 90675</span>
              </li>
              <li className="flex items-center space-x-2 text-[#ece8df]">
                <MapPin className="h-4 w-4 text-[#ece8df]" />
                <span>Anna University, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ece8df]/40 mt-8 pt-8 text-center">
          <p className="text-[#ece8df] font-classic">
            © 2025 LITCLUB – Literary Society of Anna University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
