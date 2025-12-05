import React, { useState, useMemo,useRef,useEffect } from 'react';
import { Search } from 'lucide-react';
import '../../app/EventsOutline.css';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  mode?: 'online' | 'offline' | 'hybrid';
  platform?: string; 
  platformCode?: string;
  category: EventCategory;
  imageUrl?: string;
  price: number;
  isFree: boolean;
  organizer: string;
  attendees: number;
  maxAttendees?: number;
  tags: string[];
  isLiked: boolean;
  isRegistered: boolean;
  type: 'past' | 'ongoing' | 'upcoming';
  contactInfo?: string;
  isLink?: boolean;
  googleFormUrl?: string;
}

export interface EventCategory {
  id: string;
  name: string;
  color: string;
}

interface EventsOutlineProps {
  events: Event[];
  onEventClick?: (event: Event) => void;
}

const EventsOutline: React.FC<EventsOutlineProps> = ({ events, onEventClick }) => {
  // null means "no category selected" → show all
  const [selectedCategory, setSelectedCategory] = useState<'past' | 'ongoing' | 'upcoming' | null>(null);
  // State to track selected event for detailed view
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const ourEventsRef = useRef<HTMLDivElement>(null);
  const eventDetailRef = useRef<HTMLDivElement>(null);
  const filteredEvents = useMemo(() => {
      const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // Descending order
    });
    return sortedEvents
    .filter(event => !selectedCategory || event.type === selectedCategory)
    .filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, selectedCategory, searchQuery]);
  useEffect(() => {
    if (searchQuery) {
      setTimeout(() => {
        ourEventsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 10000);
    }
  }, [searchQuery]);

  const handleCategoryClick = (category: 'past' | 'ongoing' | 'upcoming') => {
    setSelectedCategory(prev => (prev === category ? null : category));
    setTimeout(() => {
      ourEventsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };
  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setTimeout(() => {
      eventDetailRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate().toString().padStart(2, '0')
    };
  };

  const [currentIndex, setCurrentIndex] = useState(2);
  const getClassName = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "our-event-card center";
    if (diff === -1) return "our-event-card left1";
    if (diff === -2) return "our-event-card left2";
    if (diff === 1) return "our-event-card right1";
    if (diff === 2) return "our-event-card right2";
    return "our-event-card hidden";
  };

  const categoryImages: Record<'past' | 'ongoing' | 'upcoming', string> = {
  past: 'events/past.jpg',
  ongoing: 'events/ongoing.jpg',
  upcoming: 'events/upcoming.png', // Example: sunrise or future theme
  };

  // Title for Our Events section
  const categoryTitle = selectedCategory ? `${selectedCategory.toUpperCase()} EVENTS` : 'OUR EVENTS';

  return (
    <div className="vintage-events-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title"><span className="title-main">EVENTS</span></h1>
          <div className="search-box" style={{ marginTop: '1rem', maxWidth: '320px' }}>
            <input
              type="text"
              placeholder="Search events..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  ourEventsRef.current?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
            <button className="search-icon" aria-hidden
            onClick={() => ourEventsRef.current?.scrollIntoView({ behavior: 'smooth' })}>
              <Search size={18} />
            </button>
          </div>
          <div className="hero-images">
            <div className="hero-image hero-image-1"><img src="events/hero1.jpg" alt="Vintage magnifying glass" /></div>
            <div className="hero-image hero-image-2"><img src="events/hero2.jpg" alt="Old books" /></div>
            <div className="hero-image hero-image-3"><img src="events/hero3.jpg" alt="Daisy flowers" /></div>
          </div>
        </div>
        <div className="hero-lines">
          <div className="dashed-line top"></div>
          <div className="dashed-line bottom"></div>
        </div>
      </section>
      {/* Event Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          {['past', 'ongoing', 'upcoming'].map((cat) => (
            <div key={cat} className={`category-card ${selectedCategory === cat ? 'selected' : ''}`}
              onClick={() => handleCategoryClick(cat as 'past' | 'ongoing' | 'upcoming')}>
              <div className="polaroid-frame">
                <img
                  src={categoryImages[cat as 'past' | 'ongoing' | 'upcoming']}
                  alt={`${cat} events`}
                />
              </div>
              <button className="category-btn">{cat.toUpperCase()}</button>
              <button className="category-arrow">→</button>
            </div>
          ))}
        </div>
      </section>
      {/* Our Events Section */}
      <section className="our-events-section" ref={ourEventsRef}>
        <div className="section-header">
          <div className="section-line"></div>
          <h2 className="section-title">{categoryTitle}</h2>
          <div className="section-line"></div>
        </div>

        <div className="our-events-container">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => {
              const diff = index - currentIndex;

              // Scale and opacity based on distance from center
              const scale = diff === 0 ? 1.2 : diff === -1 || diff === 1 ? 0.9 : 0.75;
              const opacity = diff === 0 ? 1 : diff === -1 || diff === 1 ? 0.8 : 0.6;
              const order = diff + filteredEvents.length; // ensures center is always visually first

              return (
                <div
                  key={event.id}
                  className="our-event-card"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    order,
                    margin: '0 10px', // spacing between cards
                    transition: 'all 0.5s ease',
                    cursor: 'pointer', // Add cursor pointer to indicate clickable
                  }}
                  onClick={() => handleEventClick(event)} // Handle click to select event
                  onMouseEnter={() => setCurrentIndex(index)} // Handle hover to center the card
                >
                  <div className="our-event-icon">
                    <img 
                      src={event.imageUrl || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=cover'} 
                      alt={event.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="our-event-name">{event.title}</div>
                </div>
              );
            })
          ) : selectedCategory === 'ongoing' ? (
            <p className="section-title">No ongoing events to display</p>
          ) : selectedCategory === 'upcoming' ? (
            <p className="section-title">Coming Soon ...</p>
          ) : selectedCategory === 'past' ? (
            <p className="section-title">No past events to display</p>
          ) : (
            <p className="section-title">No events to display</p>
          )}
        </div>

        {/* Navigation */}
        <div className="our-events-nav">
          <button
            className="nav-arrow left"
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
          >
            «
          </button>
          <div className="line"></div>
          <button
            className="nav-arrow right"
            onClick={() =>
              setCurrentIndex((i) => Math.min(i + 1, filteredEvents.length - 1))
            }
            disabled={currentIndex === filteredEvents.length - 1}
          >
            »
          </button>
        </div>
      </section>




      {/* Event Listings - Show either detailed view or normal list */}
      {selectedEvent ? (
        // Detailed Event View - Simple layout
        <section className="event-detail-view" ref={eventDetailRef}>
          {/* Event Card - Only Selected Event */}
          <div className="event-detail-card">
            <div className="event-detail-left">
              <button
                className="back-btn-detail"
                onClick={() => setSelectedEvent(null)}
              >
                ← Back
              </button>
              <img
                src={selectedEvent.imageUrl || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop'}
                alt={selectedEvent.title}
                className="event-detail-image"
              />
            </div>

            <div className="event-detail-right">
              <h2 className="event-detail-title">{selectedEvent.title}</h2>

              <div className="event-detail-date-section">
                <div className="event-detail-date-label">
                  {formatDate(selectedEvent.date).month}
                </div>
                <div className="event-detail-date-number">
                  {formatDate(selectedEvent.date).day}
                </div>
                <div className="event-detail-date-divider"></div>
              </div>

              <div className="event-detail-description-section">
                <h3 className="event-detail-description-title">DESCRIPTION</h3>
                <div className="event-detail-description-content">
                  <p>{selectedEvent.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}</p> 
                  <div className="event-detail-meta">
                    {selectedEvent.time && (
                      <p><strong>Time:</strong> {selectedEvent.time}</p>
                    )}
                    {selectedEvent.location && (
                      <p><strong>Location:</strong> {selectedEvent.location}</p>
                    )}
                    {selectedEvent.mode && (
                      <p><strong>Mode:</strong> {selectedEvent.mode.charAt(0).toUpperCase() + selectedEvent.mode.slice(1)}</p>
                    )}
                    {selectedEvent.platform && (
                      <p><strong>Platform:</strong> {selectedEvent.platform} {selectedEvent.platformCode && `- Code: ${selectedEvent.platformCode}`}</p>
                    )}
                    {!selectedEvent.isFree && (
                      <p><strong>Price:</strong> ${selectedEvent.price}</p>
                    )}
                    {selectedEvent.contactInfo && (
                      <p><strong>Contact:</strong> {selectedEvent.contactInfo}</p>
                    )}
                  </div>
                </div>

                {selectedEvent.type === 'ongoing' && selectedEvent.isLink && selectedEvent.googleFormUrl && (
                  <button
                    className="event-detail-join-btn"
                    onClick={() => window.open(selectedEvent.googleFormUrl, '_blank')}
                  >
                    JOIN NOW
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Normal Event Listings (simplified without descriptions)
        <section className="event-listings">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`event-listing ${index % 2 === 0 ? 'dark' : 'light'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleEventClick(event)}
            >
              <div className="event-image-bg">
                <img src={event.imageUrl || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop'} alt={event.title} />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <div className="date-month">{formatDate(event.date).month}</div>
                  <div className="date-day">{formatDate(event.date).day}</div>
                </div>
                <div className="event-info">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <span className="event-time">{event.time}</span>
                  </div>
                </div>
                <div className="event-arrow">→</div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default EventsOutline;
