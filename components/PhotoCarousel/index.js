"use client"; // Si usas Next.js 13+ con App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PhotoCarousel = () => {
  const images = [
    "/assets/atahualpa-studio-computer.jpg",
    "/assets/atahualpa-studio-recording.jpg",
    "/assets/atahualpa-studio-lecons.jpg",
    "/assets/atahualpa-studio-guitarist.jpg",
    "/assets/atahualpa-studio-microphone.jpg",
    "/assets/atahualpa-studio-synthesizer.jpg",
    "/assets/atahualpa-studio-pro-tools.jpg",
    "/assets/atahualpa-studio-guitars.jpg",
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
