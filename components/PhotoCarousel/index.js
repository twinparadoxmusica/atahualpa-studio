'use client'; // Si usas Next.js 13+ con App Router

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

const PhotoCarousel = ({ images, slidesPerView = 1 }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
