import React, { useState } from 'react';
import { MoveRight, MoveLeft } from 'lucide-react';

const galleryEvents = [
    {
        id: '1',
        eventName: 'Annual Stage Performance',
        title: 'ON STAGE',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
        category: 'performance'
    },
    {
        id: '2',
        eventName: 'Shipwreck Challenge',
        title: 'SHIPWRECK',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
        category: 'adventure'
    },
    {
        id: '3',
        eventName: 'Murder Mystery Night',
        title: 'MURDER MYSTERY',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
        category: 'mystery'
    },
    {
        id: '4',
        eventName: 'Vintage Ball Gala',
        title: 'VINTAGE BALL',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop&crop=center',
        category: 'social'
    },
    {
        id: '5',
        eventName: 'Book Reading Session',
        title: 'BOOK READING',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
        category: 'literature'
    }
];

export default function GalleryRedesign() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const itemsPerView = 3;
    const maxIndex = Math.max(0, galleryEvents.length - itemsPerView);

    // Ensure selectedIndex is always centered in the view for desktop
    const getCurrentIndex = () => {
        // Clamp so selected is always in the center unless at edges
        if (selectedIndex <= Math.floor(itemsPerView / 2)) return 0;
        if (selectedIndex >= galleryEvents.length - Math.ceil(itemsPerView / 2)) return maxIndex;
        return selectedIndex - Math.floor(itemsPerView / 2);
    };
    const currentIndex = getCurrentIndex();
    const visibleEvents = galleryEvents.slice(currentIndex, currentIndex + itemsPerView);

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                setSelectedIndex(idx => Math.max(idx - 1, 0));
            } else if (e.key === 'ArrowRight') {
                setSelectedIndex(idx => Math.min(idx + 1, galleryEvents.length - 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Navigation logic for arrows
    const nextSlide = () => {
        setSelectedIndex(prev => Math.min(prev + 1, galleryEvents.length - 1));
    };

    const prevSlide = () => {
        setSelectedIndex(prev => Math.max(prev - 1, 0));
    };

    // Touch handlers for mobile swipe
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        // @ts-ignore
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        // @ts-ignore
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setSelectedIndex(idx => Math.min(idx + 1, galleryEvents.length - 1));
        }
        if (isRightSwipe) {
            setSelectedIndex(idx => Math.max(idx - 1, 0));
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
                            disabled={selectedIndex === 0}
                            className={`p-2 md:p-2.5 ${selectedIndex === 0 ? 'text-gray-400' : 'text-green-800 hover:text-green-600'} transition-colors`}
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
                            disabled={selectedIndex === galleryEvents.length - 1}
                            className={`p-2 md:p-2.5 ${selectedIndex === galleryEvents.length - 1 ? 'text-gray-400' : 'text-green-800 hover:text-green-600'} transition-colors`}
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
                            <div className="w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-700">
                                <div className="relative h-64">
                                    <img
                                        src={galleryEvents[selectedIndex].imageUrl}
                                        alt={galleryEvents[selectedIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6 text-green-800">
                                    <h3 className="text-xl font-bold mb-2 tracking-wide">
                                        {galleryEvents[selectedIndex].title}
                                    </h3>
                                    <p className="text-sm opacity-90 mb-2">
                                        {galleryEvents[selectedIndex].description}
                                    </p>
                                    <p className="text-sm opacity-75">
                                        {galleryEvents[selectedIndex].date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop View - Three Cards */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {visibleEvents.map((event, idx) => {
                            const absoluteIdx = currentIndex + idx;
                            const isCenter = absoluteIdx === selectedIndex;
                            return (
                                <div
                                    key={event.id}
                                    className={`bg-white rounded-lg overflow-hidden transition-all duration-300 flex flex-col relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-700 ${
                                        isCenter
                                            ? 'shadow-2xl border-4 border-green-700 transform scale-105 z-10'
                                            : 'shadow-lg border border-gray-200 hover:shadow-xl opacity-75 hover:opacity-90'
                                    }`}
                                    onClick={() => setSelectedIndex(absoluteIdx)}
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
                                        {isCenter && (
                                            <div className="absolute top-2 right-2 bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">
                                                FEATURED
                                            </div>
                                        )}
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
                    {galleryEvents[selectedIndex]?.eventName}
                </h2>
            </div>
        </div>
    );
}