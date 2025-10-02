import React, { useState, TouchEvent } from 'react';
import { MoveRight, MoveLeft } from 'lucide-react';
import { galleryEvents } from '@/app/data/gallery-data';

export default function GalleryRedesign() {
    // Sort galleryEvents by date descending (latest first)
    const sortedGalleryEvents = [...galleryEvents].sort((a, b) => {
        // Parse MM/DD/YY to Date object
        const parseDate = (str: string) => {
            const [mm, dd, yy] = str.split('/');
            // Assume 20xx for years < 50, 19xx for years >= 50
            const year = parseInt(yy, 10) < 50 ? 2000 + parseInt(yy, 10) : 1900 + parseInt(yy, 10);
            return new Date(year, parseInt(mm, 10) - 1, parseInt(dd, 10));
        };
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const itemsPerView = 3;

    // Get visible events in circular fashion for desktop
    const getVisibleEvents = () => {
        const events = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (selectedIndex - Math.floor(itemsPerView / 2) + i + sortedGalleryEvents.length) % sortedGalleryEvents.length;
            events.push({
                ...sortedGalleryEvents[index],
                absoluteIndex: index
            });
        }
        return events;
    };
    const visibleEvents = getVisibleEvents();

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                setSelectedIndex(idx => (idx - 1 + sortedGalleryEvents.length) % sortedGalleryEvents.length);
            } else if (e.key === 'ArrowRight') {
                setSelectedIndex(idx => (idx + 1) % sortedGalleryEvents.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Navigation logic for arrows
    const nextSlide = () => {
        setSelectedIndex(prev => (prev + 1) % sortedGalleryEvents.length);
    };

    const prevSlide = () => {
        setSelectedIndex(prev => (prev - 1 + sortedGalleryEvents.length) % sortedGalleryEvents.length);
    };

    // Touch handlers for mobile swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setSelectedIndex(idx => (idx + 1) % sortedGalleryEvents.length);
        }
        if (isRightSwipe) {
            setSelectedIndex(idx => (idx - 1 + sortedGalleryEvents.length) % sortedGalleryEvents.length);
        }
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'rgb(229,199,177)' }}>
            {/* Gallery Section */}
            <div className="py-10 md:py-20">
                <div className="max-w-7xl mx-auto px-2 md:px-4">
                    {/* Desktop Header with Arrows */}
                    <div className="hidden md:flex flex-row items-center justify-center mb-8 md:mb-12 gap-4 md:gap-0">
                        <button
                            onClick={prevSlide}
                            className="p-2 md:p-2.5 text-green-800 hover:text-green-600 transition-colors"
                            aria-label="Previous image"
                        >
                            <MoveLeft size={36} className="md:w-12 md:h-12" />
                        </button>
                        <div className="text-center mx-2 md:mx-8">
                            <h1 className="text-3xl md:text-7xl font-bold text-green-800 mb-2 md:mb-4 tracking-wide font-serif">
                                GALLERY
                            </h1>
                            <p className="text-base md:text-xl text-green-800 italic font-serif">
                                A glimpse into our events & memories.
                            </p>
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-2 md:p-2.5 text-green-800 hover:text-green-600 transition-colors"
                            aria-label="Next image"
                        >
                            <MoveRight size={36} className="md:w-12 md:h-12" />
                        </button>
                    </div>

                    {/* Mobile Header */}
                    <div className="md:hidden text-center mb-6">
                        <h1 className="text-3xl font-bold text-green-800 mb-2 tracking-wide font-serif">
                            GALLERY
                        </h1>
                        <p className="text-base text-green-800 italic font-serif">
                            A glimpse into our events & memories.
                        </p>
                    </div>

                    {/* Mobile View - Single Card */}
                    <div
                        className="md:hidden"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="flex justify-center">
                            <div className="w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-700 relative">
                                {/* Overlay Arrows */}
                                <button
                                    onClick={prevSlide}
                                    aria-label="Previous image"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-green-800/80 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                                >
                                    <MoveLeft size={28} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    aria-label="Next image"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-green-800/80 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                                >
                                    <MoveRight size={28} />
                                </button>
                                <div className="relative h-64">
                                    <img
                                        src={sortedGalleryEvents[selectedIndex].imageUrl}
                                        alt={sortedGalleryEvents[selectedIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6 text-green-800">
                                    <h3 className="text-xl font-bold mb-2 tracking-wide">
                                        {sortedGalleryEvents[selectedIndex].title}
                                    </h3>
                                    <p className="text-sm opacity-90 mb-2">
                                        {sortedGalleryEvents[selectedIndex].description}
                                    </p>
                                    <p className="text-sm opacity-75">
                                        {sortedGalleryEvents[selectedIndex].date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop View - Three Cards */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {visibleEvents.map((event) => {
                            const isCenter = event.absoluteIndex === selectedIndex;
                            return (
                                <div
                                    key={`${event.id}-${event.absoluteIndex}`}
                                    className={`bg-white rounded-lg overflow-hidden transition-all duration-300 flex flex-col relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-700 ${
                                        isCenter
                                            ? 'shadow-2xl border-4 border-green-700 transform scale-105 z-10'
                                            : 'shadow-lg border border-gray-200 hover:shadow-xl opacity-75 hover:opacity-90'
                                    }`}
                                    onClick={() => setSelectedIndex(event.absoluteIndex)}
                                    tabIndex={0}
                                    aria-label={`Select ${event.eventName}`}
                                >
                                    <div className="relative h-64">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                    <div className="p-6 text-green-800">
                                        <h3 className="text-xl font-bold mb-1 tracking-wide">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm opacity-90 mb-1">
                                            {event.description}
                                        </p>
                                        <p className="text-xs opacity-75">
                                            {event.date}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                        {Array.from({ length: galleryEvents.length }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    selectedIndex === index
                                        ? 'bg-green-800 scale-125'
                                        : 'bg-green-300 hover:bg-green-500'
                                }`}
                                aria-label={`Go to event ${galleryEvents[index].eventName}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Event Name Display */}
            <div className="text-center py-8 md:py-16">
                <h2 className="text-2xl md:text-4xl font-bold text-green-800 tracking-wide font-serif">
                    {sortedGalleryEvents[selectedIndex]?.eventName}
                </h2>
            </div>
        </div>
    );
}