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
        id: '4',
        eventName: 'Murder Mystery Night',
        title: 'MURDER MYSTERY',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
        category: 'mystery'
    },
    {
        id: '5',
        eventName: 'Vintage Ball Gala',
        title: 'VINTAGE BALL',
        date: '04/04/25',
        description: 'Event Desc.',
        imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop&crop=center',
        category: 'social'
    },
    {
        id: '6',
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

    // Ensure selectedIndex is always centered in the view
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

    const nextSlide = () => {
        setSelectedIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setSelectedIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'rgb(229,199,177)' }}>

            {/* Gallery Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-center mb-12">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-2 ${currentIndex === 0 ? 'text-gray-400' : 'text-green-800 hover:text-green-600'} transition-colors`}
                        >
                            <MoveLeft size={48} />
                        </button>

                        <div className="text-center mx-8">
                            <h1 className="text-7xl font-bold text-green-800 mb-4 tracking-wide font-serif">
                                GALLERY
                            </h1>
                            <p className="text-xl text-green-800 italic font-serif">
                                A glimpse into our events & memories.
                            </p>
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className={`p-2 ${currentIndex === maxIndex ? 'text-gray-400' : 'text-green-800 hover:text-green-600'} transition-colors`}
                        >
                            <MoveRight size={48} />
                        </button>
                    </div>

                    {/* Gallery Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {visibleEvents.map((event, idx) => {
                            const absoluteIdx = currentIndex + idx;
                            const isCenter = absoluteIdx === selectedIndex;
                            return (
                                <div
                                    key={event.id}
                                    className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative cursor-pointer ${isCenter ? 'border-2 border-green-700' : 'border border-gray-200'}`}
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
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: galleryEvents.length }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-200 ${selectedIndex === index ? 'bg-green-800' : 'bg-green-300'}`}
                                aria-label={`Go to event ${galleryEvents[index].eventName}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center py-16">
                <h2 className="text-4xl font-bold text-green-800 tracking-wide">
                    {galleryEvents[selectedIndex]?.eventName}
                </h2>
            </div>

        </div>
    );
}