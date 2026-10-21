'use client';

import { gallery } from '@/lib/data';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar, Image as ImageIcon } from 'lucide-react';

export default function GaleriPage() {
  const categories = ['Semua', ...Array.from(new Set(gallery.map(g => g.category)))];
  const [activeCategory, setActiveCategory] = useState('Semua');
  const filtered = activeCategory === 'Semua' ? gallery : gallery.filter(g => g.category === activeCategory);

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Galeri</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Galeri Kegiatan</h1>
          <p className="mt-4 text-lg text-[#64748B]">Dokumentasi kegiatan, prestasi, dan momen berharga di SMK Negara Angin.</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'border border-[#DCE5F2] bg-white text-[#172033] hover:bg-[#F5F8FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(item => (
            <div key={item.id} className="group overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">{item.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#172033]">{item.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-[#64748B]">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ImageIcon className="h-16 w-16 text-gray-300" />
            <p className="mt-4 text-lg font-semibold text-[#64748B]">Belum ada foto untuk kategori ini.</p>
          </div>
        )}
      </div>
    </main>
  );
}
