"use client";

import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function InstaCarousel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const initInstagram = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };

      if (!(window as any).instgrm) {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        script.onload = initInstagram;
        document.body.appendChild(script);
      } else {
        initInstagram();
      }
    }
  }, []);

  const posts = [
    "https://www.instagram.com/p/DPIwZ0GEWvp/?igsh=czZuZGpleGp5cTdk",
    "https://www.instagram.com/p/DPTNAqTEWyT/?igsh=YnNjYXMwZDkzZnMw",
    "https://www.instagram.com/p/DO3D1qVkUuc/?igsh=eG5vYndxZmh4cGJm",
    "https://www.instagram.com/p/DOWAZo8jN0j/?igsh=bDFsazhmMmFwOGQw",
  ];

  return (
    <section className="py-20 bg-[rgb(23,58,43)] text-[rgb(242,223,209)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Instagram className="w-6 h-6 text-[rgb(242,223,209)]" />
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Latest from Instagram
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.1}
          centeredSlides
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {posts.map((url, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex flex-col justify-start items-center bg-[rgb(242,223,209)]/20 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300 p-4 h-[550px] overflow-hidden group">
                
                {/* Instagram Embed */}
                <blockquote
                  className="instagram-media !m-0"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    width: "100%",
                    minHeight: "440px",
                  }}
                ></blockquote>

                {/* Hover Overlay */}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all text-white font-semibold text-sm"
                >
                  View on Instagram ↗
                </a>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none"></div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
