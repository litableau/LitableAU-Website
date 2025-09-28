"use client";
import { Navbar } from "@/components/ui/navbar";
import EventsOutline, { type Event } from "@/components/ui/EventsOutline";
import { sampleEvents } from "@/data/sampleEvents";
import { Footer } from "@/components/ui/footer";

export default function EventsPage() {
  const events: Event[] = sampleEvents;

  return (
    <main className="min-h-screen bg-[#F5F5DC] dark:bg-[#8B7355]">
      <Navbar />
      <div className="pt-16">
        <EventsOutline events={events} />
      </div>
      <Footer />
    </main>
  );
}


