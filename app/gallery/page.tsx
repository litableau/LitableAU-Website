"use client";
import { Navbar } from "@/components/ui/navbar";
import { GallerySection } from "@/components/ui/gallery-section";
import { Footer } from "@/components/ui/footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[rgb(229,199,177)] text-[#2f4f4f]">
      <Navbar />
      <div className="pt-16">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}


