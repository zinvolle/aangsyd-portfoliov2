import { useState } from 'react';
import '../styles/Carousel.css';

export interface CarouselItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) return null;

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  const activeItem = items[activeIndex];

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <button
          type="button"
          className="carousel-nav carousel-nav-prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="carousel-slide">
          {activeItem.type === 'image' ? (
            <img src={activeItem.src} alt={activeItem.alt ?? ''} />
          ) : (
            <iframe
              src={activeItem.src}
              title={activeItem.alt ?? 'Embedded video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <button
          type="button"
          className="carousel-nav carousel-nav-next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className={`carousel-dot${index === activeIndex ? ' carousel-dot-active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
