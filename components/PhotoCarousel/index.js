'use client';

import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { photoDescriptions } from '../../constants/photoDescriptions';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

const PhotoCarousel = ({
  images,
  slidesPerView = 1,
  height = '300px',
  altText = 'Atahualpa Music Studio',
}) => {
  const { locale } = useLanguage();
  return (
    <div className="carousel-container" style={{ '--carousel-height': height }}>
      <Swiper
        modules={[A11y, Keyboard, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ enabled: true }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView,
          },
        }}
      >
        {images.map((image) => {
          const src = typeof image === 'string' ? image : image.src;
          const alt =
            typeof image === 'string'
              ? photoDescriptions[src]?.[locale] ||
                photoDescriptions[src]?.fr ||
                altText
              : image.alt;

          return (
            <SwiperSlide key={src}>
              <Image
                width={1000}
                height={750}
                sizes="(max-width: 767px) 90vw, 300px"
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="carousel-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

PhotoCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
  slidesPerView: PropTypes.number,
  height: PropTypes.string,
  altText: PropTypes.string,
};

export default PhotoCarousel;
