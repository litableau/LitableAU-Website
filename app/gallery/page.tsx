"use client";
import { Navbar } from "@/components/ui/navbar";
import { GallerySection } from "@/components/ui/gallery-section";
import { Footer } from "@/components/ui/footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[rgb(229,199,177)] text-[rgb(23,58,43)]">
      <Navbar />
      <div className="pt-16">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}


