'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import type { HeroSlide } from '@/lib/types';

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const activeSlides = slides.filter(s => s.active).sort((a, b) => a.order - b.order);

  if (activeSlides.length === 0) {
    return (
      <section
        className="relative w-full overflow-hidden rounded-b-[28px] border-b border-[#DCE5F2]/60 bg-gradient-to-br from-[#F5F8FF] to-[#E8EEFB]"
        style={{ minHeight: 'clamp(320px, 50vh, 520px)' }}
      >
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-5 lg:px-8" style={{ minHeight: 'clamp(320px, 50vh, 520px)' }}>
          <div className="text-center max-w-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <ArrowRight className="h-7 w-7 text-blue-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#172033]">Belum Ada Slide Aktif</h2>
            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">Aktifkan slide melalui panel admin untuk menampilkan hero banner di halaman utama.</p>
          </div>
        </div>
      </section>
    );
  }

  return <HeroSliderInner slides={activeSlides} />;
}

function HeroSliderInner({ slides }: { slides: HeroSlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const total = slides.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleIndex = Math.min(currentIndex, total - 1);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = setInterval(nextSlide, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, nextSlide, total]);

  // Pause on tab hidden
  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Keyboard
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  }, [prevSlide, nextSlide]);

  const slide = slides[visibleIndex];

  return (
    <section
      className="relative w-full overflow-hidden rounded-b-[28px] border-b border-[#DCE5F2]/60"
      style={{ minHeight: 'clamp(420px, 65vh, 720px)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={onKeyDown}
      role="region"
      aria-label="Hero slider"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      {/* Background images (all preloaded, crossfade via opacity) */}
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${i === visibleIndex ? 'opacity-100' : 'opacity-0'}`}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F8FF]/92 via-[#F5F8FF]/80 to-[#F5F8FF]/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-5 lg:px-8" style={{ minHeight: 'clamp(420px, 65vh, 720px)' }}>
        <div className="max-w-2xl py-28 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-bold text-blue-700 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Slide {visibleIndex + 1} / {total}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#172033] md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#64748B]">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.ctaUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              {slide.ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/program-keahlian"
              className="rounded-xl border border-[#DCE5F2] bg-white/90 px-6 py-3.5 font-bold text-[#172033] backdrop-blur-sm hover:border-blue-300 hover:text-blue-700 transition-all"
            >
              Jelajahi Jurusan
            </Link>
          </div>
        </div>
      </div>

      {/* Slider controls - only render if > 1 slide */}
      {total > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-[#DCE5F2]/60 bg-white/70 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-xl">
            <button
              onClick={prevSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#172033] hover:bg-blue-50 transition-colors"
              aria-label="Slide sebelumnya"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5 px-1">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(i)}
                  className={`rounded-full transition-all ${
                    i === visibleIndex ? 'h-2.5 w-7 bg-blue-600' : 'h-2.5 w-2.5 bg-[#DCE5F2] hover:bg-blue-300'
                  }`}
                  aria-label={`Pindah ke slide ${i + 1}`}
                  aria-current={i === visibleIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#172033] hover:bg-blue-50 transition-colors"
              aria-label="Slide berikutnya"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
