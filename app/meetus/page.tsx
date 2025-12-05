import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function MeetUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[rgb(229,199,177)] text-[rgb(23,58,43)]">
      <Navbar />

      {/* Make the content area stretch so the iframe fills remaining frame */}
      <div className="flex-1 w-full max-w-full mx-auto px-0">
        <div className="w-full h-full">
          <iframe
            src="/team/index.html"
            title="Litclub Team Page"
            className="w-full h-full min-h-[70vh] bg-[#f5f5dc] border-none"
            style={{ height: 'calc(100vh - 6rem)' }}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}