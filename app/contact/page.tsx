"use client";
import { Navbar } from "@/components/ui/navbar";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[rgb(229,199,177)] text-[rgb(23,58,43)]">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}


