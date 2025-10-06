import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function MeetUsPage() {
  return (
    <main className="min-h-screen bg-[rgb(229,199,177)] text-[rgb(23,58,43)]">
      <Navbar />
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <a
            href="/"
            className="inline-block px-3 py-1 bg-[rgb(23,58,43)] text-[#f5f5dc] rounded hover:opacity-80 transition font-classic"
          >
            ← Back Home
          </a>
        </div>
        <div className="rounded-lg overflow-hidden border border-[rgb(23,58,43)] shadow-lg bg-[#f5f5dc]">
          {/* Embed the existing CRA app. For production, replace with deployed URL or static build path. */}
          <iframe
            src="/team/index.html"
            title="Litclub Team Page"
            className="w-full h-[80vh] bg-[#f5f5dc]"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}