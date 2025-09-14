import React, { useState, useMemo } from 'react';
import '../../app/EventsOutline.css'; 

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
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

  /*const eventTypes = [
    { id: 'shipwreck', name: 'SHIPWRECK', icon: '⛵' },
    { id: 'treasure-hunt', name: 'TREASURE HUNT', icon: '🧭' },
    { id: 'murder-mystery', name: 'MURDER MYSTERY', icon: '🔍' },
    { id: 'channel-surfing', name: 'CHANNEL SURFING', icon: '📺' },
    { id: 'quiz', name: 'QUIZ', icon: '❓' }
  ];*/

  // Filter events based on selected category; null → all events
  const [searchQuery, setSearchQuery] = useState('');
  const filteredEvents = useMemo(() => {
  return events
    .filter(event => !selectedCategory || event.type === selectedCategory)
    .filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
}, [events, selectedCategory, searchQuery]);


  const handleCategoryClick = (category: 'past' | 'ongoing' | 'upcoming') => {
    // Toggle selection: deselect if clicked again
    setSelectedCategory(prev => (prev === category ? null : category));
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
  

  // Title for Our Events section
  const categoryTitle = selectedCategory ? `${selectedCategory.toUpperCase()} EVENTS` : 'OUR EVENTS';

  return (
    <div className="vintage-events-page">
         {/* Header Navigation */}
      <header className="vintage-header">
        <div className="header-content">
          <div className="logo"><div className="logo-icon">✒️</div></div>
          <nav className="main-nav">
            <a href="#about" className="nav-link">ABOUT US</a>
            <a href="#home" className="nav-link">HOME PAGE</a>
            <span className="logo-text">LITABLEAU</span>
            <a href="#activities" className="nav-link active">EVENTS</a>
            <a href="#contact" className="nav-link">MEET US</a>
          </nav>
          <div className="search-box">
  <input
    type="text"
    placeholder="Search events..."
    className="search-input"
    // Optional: handle input change
     onChange={(e) => setSearchQuery(e.target.value)}
  />
  <span className="search-icon">🔍</span>
</div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title"><span className="title-main">EVENTS</span></h1>
          <div className="hero-images">
            <div className="hero-image hero-image-1"><img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" alt="Vintage magnifying glass" /></div>
            <div className="hero-image hero-image-2"><img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" alt="Old books" /></div>
            <div className="hero-image hero-image-3"><img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" alt="Daisy flowers" /></div>
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
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" 
                     alt={`${cat} events`} />
              </div>
              <button className="category-btn">{cat.toUpperCase()}</button>
              <button className="category-arrow">→</button>
            </div>
          ))}
        </div>
      </section>
{/* Our Events Section */}
<section className="our-events-section">
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
          }}
        >
          <div className="our-event-icon">🎫</div>
          <div className="our-event-name">{event.title}</div>
        </div>
      );
    })
  ) : (
    <p>No events to display</p>
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




      {/* Event Listings */}
      <section className="event-listings">
        {filteredEvents.map((event, index) => (
          <div key={event.id} className={`event-listing ${index % 2 === 0 ? 'dark' : 'light'}`}>
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
                <div className="event-description">
                  <span className="desc-label">{event.description}</span>
                </div>
              </div>
              <button className="join-btn" onClick={() => onEventClick?.(event)}>JOIN NOW</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsOutline;
