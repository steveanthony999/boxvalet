'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import { DotButton, PrevButton, NextButton } from './ArrowsAndButtons';
// import Autoplay from 'embla-carousel-autoplay';
import { testimonials } from './testimonialByIndex';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  //   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section
      id='Testimonials'
      className={`${styles.testimonials_main} padding_tb_121`}
    >
      <Image
        src='/dolly.svg'
        className={styles.dolly_image}
        alt='Dolly'
        width={324}
        height={459}
        priority
      />
      <div className='container'>
        <div className={styles.testimonials_container}>
          <Image src='/quote.svg' alt='Quote' width={58} height={58} priority />
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {testimonials.map((testimonial, index) => (
                <div className={styles.embla__slide} key={index}>
                  <h3 className='margin_t_36 heading_secondary'>
                    {testimonial.headerQuote}
                  </h3>
                  <p className='margin_t_28'>{testimonial.testimonialText}</p>
                  <Image
                    src={testimonial.avatarImage}
                    alt={testimonial.reviewerName}
                    width={64}
                    height={64}
                    className='margin_t_36 avatar_img'
                    priority
                  />
                  <p className='margin_t_6'>{testimonial.reviewerName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.arrows_and_dots_container} margin_t_36`}>
            <PrevButton onClick={scrollPrev} />
            <div className={styles.embla__dots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={styles.dot.concat(
                    index === selectedIndex ? '_selected' : ''
                  )}
                  style={{
                    border: 'none',
                    transform:
                      index === selectedIndex ? 'scale(3, 1)' : 'scale(1, 1)',
                    transition: '0.4s ease-out',
                  }}
                />
              ))}
            </div>
            <NextButton onClick={scrollNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
