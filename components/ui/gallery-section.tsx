import React, { useState, TouchEvent } from 'react';
import { MoveRight, MoveLeft } from 'lucide-react';
import { galleryEvents } from '@/app/data/gallery-data';


const groupEventsByYear = (events: typeof galleryEvents) => {
    const grouped: Record<string, typeof galleryEvents> = {};
    events.forEach(event => {
        const year = event.date.split('/')[2];
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(event);
    });
    // Sort years descending
    const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));
    // Sort events in each year by date descending
    sortedYears.forEach(year => {
        grouped[year].sort((a, b) => {
            const parseDate = (str: string) => {
                const [mm, dd, yyyy] = str.split('/');
                return new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
            };
            return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        });
    });
    return { grouped, sortedYears };
};

export default function GalleryRedesign() {
    const { grouped, sortedYears } = groupEventsByYear(galleryEvents);
    const [selectedIndexes, setSelectedIndexes] = useState<Record<string, number>>(() => {
        const obj: Record<string, number> = {};
        sortedYears.forEach(year => { obj[year] = 0; });
        return obj;
    });
    const itemsPerView = 3;
    const middleIndex = Math.floor(itemsPerView / 2); // Middle position (1 for 3 items)

    // Navigation logic per year
    const nextSlide = (year: string, max: number) => {
        setSelectedIndexes(prev => ({
            ...prev,
            [year]: (prev[year] + 1) % max
        }));
    };
    const prevSlide = (year: string, max: number) => {
        setSelectedIndexes(prev => ({
            ...prev,
            [year]: (prev[year] - 1 + max) % max
        }));
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            sortedYears.forEach(year => {
                const max = grouped[year].length;
                if (e.key === 'ArrowLeft') {
                    prevSlide(year, max);
                } else if (e.key === 'ArrowRight') {
                    nextSlide(year, max);
                }
            });
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [sortedYears, grouped]);

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
    const onTouchEnd = (year: string, max: number) => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide(year, max);
        if (isRightSwipe) prevSlide(year, max);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'rgb(229,199,177)' }}>
            <div className="py-10 md:py-20">
                <div className="max-w-7xl mx-auto px-2 md:px-4">
                    {/* Headers */}
                    <div className="hidden md:flex flex-row items-center justify-center mb-8 md:mb-12 gap-4 md:gap-0">
                        <div className="text-center mx-2 md:mx-8">
                            <h1 className="text-3xl md:text-7xl font-bold text-green-800 mb-2 md:mb-4 tracking-wide font-serif">
                                GALLERY
                            </h1>
                            <p className="text-base md:text-xl text-green-800 italic font-serif">
                                A glimpse into our events & memories.
                            </p>
                        </div>
                    </div>
                    <div className="md:hidden text-center mb-6">
                        <h1 className="text-3xl font-bold text-green-800 mb-2 tracking-wide font-serif">
                            GALLERY
                        </h1>
                        <p className="text-base text-green-800 italic font-serif">
                            A glimpse into our events & memories.
                        </p>
                    </div>

                    {/* Render by year */}
                    {sortedYears.map(year => (
                        <div key={year} className="mb-12">
                            <h2 className="text-xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6 text-center font-serif">{year}</h2>
                            {/* Mobile View */}
                            <div className="md:hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={() => onTouchEnd(year, grouped[year].length)}>
                                <div className="flex justify-center">
                                    <div className="w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-700 relative">
                                        {/* Overlay Arrows */}
                                        <button
                                            onClick={() => prevSlide(year, grouped[year].length)}
                                            aria-label="Previous image"
                                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-green-800/80 text-white rounded-full p-2"
                                        >
                                            <MoveLeft size={28} />
                                        </button>
                                        <button
                                            onClick={() => nextSlide(year, grouped[year].length)}
                                            aria-label="Next image"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-green-800/80 text-white rounded-full p-2"
                                        >
                                            <MoveRight size={28} />
                                        </button>
                                        <div className="relative h-64">
                                            <img
                                                src={grouped[year][selectedIndexes[year]].imageUrl}
                                                alt={grouped[year][selectedIndexes[year]].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        </div>
                                        <div className="p-6 text-green-800">
                                            <h3 className="text-xl font-bold mb-2 tracking-wide">
                                                {grouped[year][selectedIndexes[year]].title}
                                            </h3>
                                            <p className="text-sm opacity-90 mb-2">
                                                {grouped[year][selectedIndexes[year]].description}
                                            </p>
                                            <p className="text-sm opacity-75">
                                                {grouped[year][selectedIndexes[year]].date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Dot Indicators */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {grouped[year].map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedIndexes(prev => ({ ...prev, [year]: idx }))}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${selectedIndexes[year] === idx ? 'bg-green-800 scale-125' : 'bg-green-300 hover:bg-green-500'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Desktop View */}
                            <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {Array.from({ length: itemsPerView }).map((_, idx) => {
                                    const eventIndex = (selectedIndexes[year] - middleIndex + idx + grouped[year].length) % grouped[year].length;
                                    const event = grouped[year][eventIndex];
                                    return (
                                        <div
                                            key={`${event.id}-${idx}`}
                                            className={`bg-white rounded-lg overflow-hidden transition-all duration-300 flex flex-col relative cursor-pointer shadow-lg border border-gray-200 hover:shadow-xl opacity-75 hover:opacity-90`}
                                            onClick={() => setSelectedIndexes(prev => ({ ...prev, [year]: eventIndex }))}
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
                            {/* Desktop Arrows */}
                            <div className="hidden md:flex justify-center mt-4 gap-4">
                                <button onClick={() => prevSlide(year, grouped[year].length)} aria-label="Previous image">
                                    <MoveLeft size={36} />
                                </button>
                                <button onClick={() => nextSlide(year, grouped[year].length)} aria-label="Next image">
                                    <MoveRight size={36} />
                                </button>
                            </div>
                            {/* Dot Indicators */}
                            <div className="hidden md:flex justify-center mt-4 space-x-2">
                                {grouped[year].map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedIndexes(prev => ({ ...prev, [year]: idx }))}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${selectedIndexes[year] === idx ? 'bg-green-800 scale-125' : 'bg-green-300 hover:bg-green-500'}`}
                                    />
                                ))}
                            </div>
                            {/* Event Name Display */}
                            <div className="text-center py-4 md:py-8">
                                <h2 className="text-lg md:text-2xl font-bold text-green-800 tracking-wide font-serif">
                                    {grouped[year][selectedIndexes[year]]?.eventName}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}