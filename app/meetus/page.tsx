import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import TeamPageClient from "./TeamPageClient";

export default function MeetUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[rgb(229,199,177)] text-[rgb(23,58,43)]">
      <Navbar />

      <div className="flex-1 w-full max-w-full mx-auto px-0 min-h-0">
        <TeamPageClient />
      </div>

      <Footer />
    </main>
  );
}