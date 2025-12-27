"use client";
import { Navbar } from "@/components/ui/navbar";
import GalleryRedesign from "@/components/ui/gallery-section";
import { Footer } from "@/components/ui/footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#ece8df] text-[rgb(23,58,43)]">
      <Navbar />
      <div className="pt-16">
        <GalleryRedesign />
      </div>
      <Footer />
    </main>
  );
}
