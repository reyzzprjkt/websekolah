'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  { label: 'Program Keahlian', href: '/program-keahlian' },
  { label: 'Berita', href: '/berita' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Kontak', href: '/kontak' },
];

const PublicNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
      <div
        className="mx-auto max-w-6xl rounded-full border border-[#c7d4e8] bg-white/80 shadow-[0_2px_8px_rgba(37,99,235,0.06),0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300"
      >
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="SMK Negara Angin">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              SA
            </div>
            <div className="hidden min-[480px]:block">
              <span className="block text-sm font-bold leading-tight text-[#172033]">SMK NEGARA ANGIN</span>
              <span className="block text-[10px] font-semibold text-blue-600">BELAJAR, BERKARYA, SIAP MENDUNIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#64748B] hover:text-blue-700 hover:bg-blue-50/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/ppdb/daftar"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/15 transition-all"
            >
              Daftar PPDB
            </Link>
            <Link
              href="/auth/login"
              className="px-4 py-2 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Masuk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#64748B] hover:bg-blue-50 transition-colors"
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#c7d4e8] bg-white/95 p-4 shadow-lg shadow-black/5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Menu utama">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMobileMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#64748B] hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-[#DCE5F2] pt-3">
            <Link
              href="/ppdb/daftar"
              onClick={toggleMobileMenu}
              className="block w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Daftar PPDB
            </Link>
            <Link
              href="/auth/login"
              onClick={toggleMobileMenu}
              className="block w-full rounded-xl bg-blue-50 py-3 text-center text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
            >
              Masuk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
