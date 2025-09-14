"use client";
import { useState } from 'react';
import EventsOutline,{type Event} from './EventsOutline';
import { sampleEvents } from '../../data/sampleEvents';
import '../../app/activities-section.css';

function ActivitiesSection() {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const handleEventClick = (event: Event) => {
    console.log('Event clicked:', event.title);
    // You can implement navigation to event details page here
    alert(`Opening details for: ${event.title}`);
  };

  const handleEventLike = (eventId: string) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === eventId
          ? { ...event, isLiked: !event.isLiked }
          : event
      )
    );
    console.log('Event liked/unliked:', eventId);
  };

  const handleEventRegister = (eventId: string) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === eventId
          ? { ...event, isRegistered: !event.isRegistered }
          : event
      )
    );
    console.log('Event registration toggled:', eventId);
  };

  const handleEventShare = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      // You can implement actual sharing functionality here
      if (navigator.share) {
        navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(`${event.title} - ${event.description}`);
        alert('Event details copied to clipboard!');
      }
    }
    console.log('Event shared:', eventId);
  };

  return (
    <div id="activities" className="ActivitiesSection">
      <EventsOutline
        events={events}
        onEventClick={handleEventClick}
        
      />
    </div>
  );
}

export default ActivitiesSection;
