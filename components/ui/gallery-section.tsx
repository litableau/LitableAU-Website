"use client";
import React, {useState, useRef, useEffect, useCallback} from "react";
import {ChevronLeft, ChevronRight, ChevronDown, Calendar, ImageIcon} from "lucide-react";
import {galleryEvents, GalleryEvent} from "@/app/data/gallery-data";
import Image from "next/image";

export function GallerySection() {
    const sortedEvents = [...galleryEvents].sort((a, b) => {
        const partsA = a.date.split('-').map(Number);
        const partsB = b.date.split('-').map(Number);
        const dateA = new Date(partsA[2], partsA[1] - 1, partsA[0]);
        const dateB = new Date(partsB[2], partsB[1] - 1, partsB[0]);
        return dateB.getTime() - dateA.getTime();
    });

    const [selectedEvent, setSelectedEvent] = useState<GalleryEvent>(sortedEvents[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === selectedEvent.images.length - 1 ? 0 : prev + 1
        );
    }, [selectedEvent.images.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedEvent.images.length - 1 : prev - 1
        );
    }, [selectedEvent.images.length]);

    // Add keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextImage, prevImage]);

    const selectEvent = (event: GalleryEvent) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0);
        setIsDropdownOpen(false);
    };

    const scrollToImage = (index: number) => {
        setCurrentImageIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const imageWidth = container.offsetWidth / 3; // Assuming 3 images visible
            container.scrollTo({
                left: index * imageWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="gallery"
            className="py-20 bg-[rgb(229,199,177)] relative overflow-hidden"
            aria-label="Image gallery"
            role="region"
        >
            {/* Custom CSS for moving beige dots */}
            <style jsx>{`
                @keyframes float-beige-gallery {
                    0% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.8;
                    }
                    90% {
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(-60px) translateX(40px);
                        opacity: 0;
                    }
                }

                @keyframes drift-beige-gallery {
                    0% {
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0;
                    }
                    20% {
                        opacity: 0.6;
                        transform: translateY(-15px) translateX(10px) scale(1.1);
                    }
                    80% {
                        opacity: 0.6;
                        transform: translateY(-45px) translateX(30px) scale(0.9);
                    }
                    100% {
                        transform: translateY(-80px) translateX(50px) scale(0.8);
                        opacity: 0;
                    }
                }

                @keyframes gentle-beige-gallery {
                    0% {
                        opacity: 0;
                        transform: scale(0.8) translateY(0px) translateX(0px);
                    }
                    25% {
                        opacity: 0.5;
                        transform: scale(1.2) translateY(-20px) translateX(15px);
                    }
                    75% {
                        opacity: 0.5;
                        transform: scale(1) translateY(-60px) translateX(40px);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(0.6) translateY(-100px) translateX(70px);
                    }
                }

                /* New subtle book animations */
                @keyframes float-book-1 {
                    0% {
                        transform: translateY(0px) translateX(0px) rotate(-6deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-30px) translateX(10px) rotate(-2deg);
                        opacity: 0.85;
                    }
                    100% {
                        transform: translateY(-80px) translateX(30px) rotate(6deg);
                        opacity: 0;
                    }
                }

                @keyframes float-book-2 {
                    0% {
                        transform: translateY(0px) translateX(0px) rotate(8deg) scale(0.95);
                        opacity: 0;
                    }
                    20% {
                        opacity: 0.6;
                    }
                    60% {
                        transform: translateY(-40px) translateX(-20px) rotate(4deg) scale(1);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(-100px) translateX(-40px) rotate(-8deg) scale(0.9);
                        opacity: 0;
                    }
                }

                @keyframes book-tilt {
                    0% {
                        transform: rotate(0deg);
                    }
                    50% {
                        transform: rotate(6deg);
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                }

                :global(.dot-float-beige-gallery) {
                    animation: float-beige-gallery 8s linear infinite;
                }

                :global(.dot-drift-beige-gallery) {
                    animation: drift-beige-gallery 10s linear infinite;
                }

                :global(.dot-gentle-beige-gallery) {
                    animation: gentle-beige-gallery 12s linear infinite;
                }

                /* Book classes */
                :global(.book-float-1) {
                    animation: float-book-1 12s linear infinite;
                }

                :global(.book-float-2) {
                    animation: float-book-2 14s linear infinite;
                }

                :global(.book-tilt) {
                    animation: book-tilt 6s ease-in-out infinite;
                    transform-origin: center;
                }
            `}</style>

            {/* Elegant Beige Background Effects */}
            <div className="absolute inset-0">
                {/* Main beige background with subtle beige overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[rgb(229,199,177)]/90 via-[rgb(229,199,177)]/80 to-[rgb(229,199,177)]/70"></div>

                {/* Animated beige dots pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Top area dots */}
                    <div
                        className="absolute top-8 left-8 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-60"
                        style={{animationDelay: '0s'}}></div>
                    <div
                        className="absolute top-16 left-20 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-gallery opacity-50"
                        style={{animationDelay: '1s'}}></div>
                    <div
                        className="absolute top-24 left-12 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-55"
                        style={{animationDelay: '2s'}}></div>

                    <div
                        className="absolute top-12 right-16 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-60"
                        style={{animationDelay: '0.5s'}}></div>
                    <div
                        className="absolute top-20 right-8 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-gallery opacity-50"
                        style={{animationDelay: '1.5s'}}></div>
                    <div
                        className="absolute top-32 right-24 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-55"
                        style={{animationDelay: '2.5s'}}></div>

                    {/* Middle area dots */}
                    <div
                        className="absolute top-1/3 left-16 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-60"
                        style={{animationDelay: '1s'}}></div>
                    <div
                        className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-gallery opacity-50"
                        style={{animationDelay: '2s'}}></div>
                    <div
                        className="absolute top-2/3 left-24 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-55"
                        style={{animationDelay: '3s'}}></div>

                    <div
                        className="absolute top-1/3 right-8 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-60"
                        style={{animationDelay: '1.5s'}}></div>
                    <div
                        className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-gallery opacity-50"
                        style={{animationDelay: '2.5s'}}></div>
                    <div
                        className="absolute top-2/3 right-12 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-55"
                        style={{animationDelay: '3.5s'}}></div>

                    {/* Bottom area dots */}
                    <div
                        className="absolute bottom-16 left-12 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-60"
                        style={{animationDelay: '2s'}}></div>
                    <div
                        className="absolute bottom-24 left-24 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-gallery opacity-50"
                        style={{animationDelay: '3s'}}></div>
                    <div
                        className="absolute bottom-32 left-8 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-55"
                        style={{animationDelay: '4s'}}></div>

                    <div
                        className="absolute bottom-12 right-8 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-60"
                        style={{animationDelay: '2.5s'}}></div>
                    <div
                        className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-gallery opacity-50"
                        style={{animationDelay: '3.5s'}}></div>
                    <div
                        className="absolute bottom-28 right-16 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-55"
                        style={{animationDelay: '4.5s'}}></div>

                    {/* Center area dots */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-gentle-beige-gallery opacity-45"
                        style={{animationDelay: '0s'}}></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#F5F5DC] rounded-full dot-float-beige-gallery opacity-40"
                        style={{animationDelay: '3s'}}></div>

                </div>

                {/* Soft beige circular elements */}
                <div
                    className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-bl from-[#F5F5DC]/15 to-transparent rounded-full blur-2xl"></div>
                <div
                    className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-tr from-[#F5F5DC]/15 to-transparent rounded-full blur-2xl"></div>
                <div
                    className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#F5F5DC]/10 to-transparent rounded-full blur-xl"></div>
                <div
                    className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-tl from-[#F5F5DC]/10 to-transparent rounded-full blur-xl"></div>

                {/* Elegant diagonal lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div
                        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform rotate-12"></div>
                    <div
                        className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform -rotate-8"></div>
                    <div
                        className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform rotate-15"></div>
                </div>

                {/* Subtle corner accents */}
                <div
                    className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#F5F5DC]/8 to-transparent"></div>
                <div
                    className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F5F5DC]/8 to-transparent"></div>
            </div>

            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#2F4F4F] mb-6 font-elegant tracking-wide">
                        GALLERY
                    </h2>
                    <p className="text-xl text-[#2F4F4F] max-w-3xl mx-auto font-elegant leading-relaxed">
                        A glimpse into our events & memories...
                    </p>
                </div>

                {/* Event Selector Dropdown */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-white/20 dark:bg-[#2F4F4F]/30 rounded-2xl px-6 py-3 border border-[#F5F5DC] dark:border-[#F5F5DC] shadow-lg backdrop-blur-sm text-[#F5F5DC] font-classic flex items-center space-x-2 hover:bg-white/30 transition-colors duration-200 min-w-[300px] justify-between"
                        >
              <span className="flex items-center space-x-2">
                <Calendar className="h-5 w-5"/>
                <span>{selectedEvent.title}</span>
              </span>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                        </button>

                        {isDropdownOpen && (
                            // Dropdown: changed to solid light-beige in light mode for better contrast and dark card in dark mode
                            <div
                                className="absolute top-full mt-2 left-0 right-0 bg-[#F5F5DC] dark:bg-[#2F4F4F] rounded-2xl border border-[#2f4f4f] dark:border-[#F5F5DC] shadow-xl backdrop-blur-md z-20">
                                {sortedEvents
                                    .map((event) => (
                                        <button
                                            key={event.id}
                                            onClick={() => selectEvent(event)}
                                            className="w-full text-left px-6 py-3 text-[#2F4F4F] dark:text-[#F5F5DC] hover:bg-[#F5F5DC]/10 dark:hover:bg-white/10 transition-colors duration-200 font-classic first:rounded-t-2xl last:rounded-b-2xl"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{event.title}</span>
                                                <span className="text-sm opacity-75">{event.date}</span>
                                            </div>
                                        </button>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Gallery Display */}
                <div
                    className="bg-white/20 dark:bg-[#2F4F4F]/30 rounded-3xl p-8 border border-[#F5F5DC] dark:border-[#F5F5DC] shadow-2xl backdrop-blur-sm">
                    {/* Event Title and Info */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] dark:text-[#F8F6F0] mb-2 font-elegant">
                            {selectedEvent.title}
                        </h2>
                        <div
                            className="flex items-center justify-center space-x-4 text-[#2F4F4F] dark:text-[#F8F6F0] mb-4">
                            <div className="flex items-center space-x-2 align-middle">
                                <Calendar className="h-5 w-5"/>
                                <span className="font-classic">{selectedEvent.date}</span>
                            </div>
                            <div className="flex items-center space-x-2 align-middle">
                                <ImageIcon className="h-5 w-5"/>
                                <span className="font-classic">{selectedEvent.images.length} Photos</span>
                            </div>
                        </div>
                        <p className="text-[#2F4F4F] dark:text-[#F8F6F0] font-classic max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
                            {selectedEvent.description}
                        </p>
                    </div>

                    {/* Main Image Display */}
                    <div className="relative mb-8">
                        {/* Navigation Controls - Above images */}
                        <div className="flex justify-between items-center mb-4 px-4" role="toolbar"
                             aria-label="Gallery navigation">
                            <button
                                onClick={prevImage}
                                className="w-12 h-12 bg-[#F5F5DC]/20 hover:bg-[#F5F5DC]/40 rounded-full flex items-center justify-center text-[#F5F5DC] transition-all duration-200 backdrop-blur-sm border border-[#F5F5DC]/30"
                                aria-label="Previous image"
                                title="Previous image (Left arrow key)"
                            >
                                <ChevronLeft className="h-6 w-6"/>
                            </button>
                            <div
                                className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-classic backdrop-blur-sm"
                                aria-live="polite"
                                role="status"
                            >
                                {currentImageIndex + 1} / {selectedEvent.images.length}
                            </div>
                            <button
                                onClick={nextImage}
                                className="w-12 h-12 bg-[#F5F5DC]/20 hover:bg-[#F5F5DC]/40 rounded-full flex items-center justify-center text-[#F5F5DC] transition-all duration-200 backdrop-blur-sm border border-[#F5F5DC]/30"
                                aria-label="Next image"
                                title="Next image (Right arrow key)"
                            >
                                <ChevronRight className="h-6 w-6"/>
                            </button>
                        </div>

                        {/* Three Image Display */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] md:h-[500px]"
                            role="group"
                            aria-roledescription="Gallery slideshow"
                        >
                            {/* Previous Image */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-[#2f4f4f]/20 hidden md:block"
                                aria-hidden="true"
                            >
                                <Image
                                    src={selectedEvent.images[currentImageIndex === 0 ? selectedEvent.images.length - 1 : currentImageIndex - 1]}
                                    alt="Previous image"
                                    fill
                                    className="object-cover transition-all duration-500 opacity-70 hover:opacity-100"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                            </div>

                            {/* Current Image (Main) */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-[#2f4f4f]/20 ring-2 ring-[#F5F5DC]/50">
                                <Image
                                    src={selectedEvent.images[currentImageIndex]}
                                    alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover transition-all duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Next Image */}
                            <div className="relative rounded-2xl overflow-hidden bg-[#2f4f4f]/20 hidden md:block">
                                <Image
                                    src={selectedEvent.images[currentImageIndex === selectedEvent.images.length - 1 ? 0 : currentImageIndex + 1]}
                                    alt="Next image"
                                    fill
                                    className="object-cover transition-all duration-500 opacity-70 hover:opacity-100"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="relative">
                        <div className="max-w-3xl mx-auto">
                            <div
                                ref={scrollContainerRef}
                                className="flex justify-center space-x-4 overflow-x-auto scrollbar-hide pb-4 px-4"
                                style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                            >
                                {selectedEvent.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToImage(index)}
                                        className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                                            currentImageIndex === index
                                                ? 'border-[#F5F5DC] scale-105 shadow-lg'
                                                : 'border-transparent hover:border-[#F5F5DC]/50 hover:scale-102'
                                        }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                        <div className={`absolute inset-0 transition-opacity duration-200 ${
                                            currentImageIndex === index ? 'bg-transparent' : 'bg-black/20 hover:bg-transparent'
                                        }`}></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Scroll Indicator Dots */}
                        <div className="flex justify-center space-x-2 mt-4">
                            {selectedEvent.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToImage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                        currentImageIndex === index
                                            ? 'bg-[#F5F5DC] w-6'
                                            : 'bg-[#F5F5DC]/40 hover:bg-[#F5F5DC]/70'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

           
        </section>
    );
}