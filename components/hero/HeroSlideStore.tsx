'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import { heroSlides } from '@/lib/data';
import type { HeroSlide } from '@/lib/types';

const STORAGE_KEY = 'smk-negara-angin:hero-slides';
const listeners = new Set<() => void>();
const defaultSlides = normalize(heroSlides);
let snapshot = defaultSlides;
function normalize(slides: HeroSlide[]): HeroSlide[] {
  return [...slides]
    .sort((a, b) => a.order - b.order)
    .map((slide, index) => ({ ...slide, order: index + 1 }));
}

function isSlide(value: unknown): value is HeroSlide {
  if (!value || typeof value !== 'object') return false;
  const slide = value as Record<string, unknown>;
  return typeof slide.id === 'string'
    && typeof slide.title === 'string'
    && typeof slide.description === 'string'
    && typeof slide.image === 'string'
    && typeof slide.ctaText === 'string'
    && typeof slide.ctaUrl === 'string'
    && typeof slide.order === 'number'
    && Number.isFinite(slide.order)
    && typeof slide.active === 'boolean';
}

function parseSlides(value: string | null): HeroSlide[] {
  if (!value) return defaultSlides;
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed) || !parsed.every(isSlide)) return defaultSlides;
    const ids = new Set(parsed.map(slide => slide.id));
    return ids.size === parsed.length ? normalize(parsed) : defaultSlides;
  } catch {
    return defaultSlides;
  }
}

function notify() {
  listeners.forEach(listener => listener());
}

function load() {
  if (typeof window === 'undefined') return;
  snapshot = parseSlides(window.localStorage.getItem(STORAGE_KEY));
}

function write(next: HeroSlide[]) {
  snapshot = normalize(next);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  }
  notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return defaultSlides;
}

interface HeroSlideStore {
  slides: HeroSlide[];
  getSlides: () => HeroSlide[];
  addSlide: (slide: HeroSlide) => void;
  updateSlide: (slide: HeroSlide) => void;
  deleteSlide: (id: string) => void;
  toggleSlide: (id: string) => void;
  moveSlide: (id: string, direction: 'up' | 'down') => void;
}

const HeroSlideContext = createContext<HeroSlideStore | null>(null);

export function HeroSlideProvider({ children }: { children: React.ReactNode }) {
  const slides = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    load();
    notify();
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      snapshot = parseSlides(event.newValue);
      notify();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const getSlides = useCallback(() => snapshot, []);
  const addSlide = useCallback((slide: HeroSlide) => write([...snapshot, slide]), []);
  const updateSlide = useCallback((slide: HeroSlide) => {
    write(snapshot.map(current => current.id === slide.id ? slide : current));
  }, []);
  const deleteSlide = useCallback((id: string) => write(snapshot.filter(slide => slide.id !== id)), []);
  const toggleSlide = useCallback((id: string) => {
    write(snapshot.map(slide => slide.id === id ? { ...slide, active: !slide.active } : slide));
  }, []);
  const moveSlide = useCallback((id: string, direction: 'up' | 'down') => {
    const current = normalize(snapshot);
    const index = current.findIndex(slide => slide.id === id);
    const target = direction === 'up' ? index - 1 : index + 1;
    if (index < 0 || target < 0 || target >= current.length) return;
    [current[index], current[target]] = [current[target], current[index]];
    write(current);
  }, []);

  const value = useMemo(() => ({ slides, getSlides, addSlide, updateSlide, deleteSlide, toggleSlide, moveSlide }), [slides, getSlides, addSlide, updateSlide, deleteSlide, toggleSlide, moveSlide]);
  return <HeroSlideContext.Provider value={value}>{children}</HeroSlideContext.Provider>;
}

export function useHeroSlideStore() {
  const store = useContext(HeroSlideContext);
  if (!store) throw new Error('useHeroSlideStore must be used inside HeroSlideProvider');
  return store;
}
