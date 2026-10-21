import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Camera, PlayCircle, Users } from 'lucide-react';

export default function PublicFooter() {
  return (
    <footer className="bg-[#F5F8FF] border-t border-[#DCE5F2] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#172033] tracking-tight">SMK NEGARA ANGIN</span>
                <span className="text-xs text-blue-600 font-semibold tracking-wide">Pendidikan Vokasi Masa Depan</span>
              </div>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm mt-2">
              Sekolah menengah kejuruan unggulan berbasis teknologi dan kreativitas. Mencetak lulusan kompeten, berkarakter luhur, dan siap bersaing di kancah global.
            </p>
            <p className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200/60 rounded-lg px-3 py-2 w-fit">
              &quot;Belajar, Berkarya, Siap Mendunia.&quot;
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white border border-[#DCE5F2] flex items-center justify-center text-[#64748B] hover:text-blue-600 hover:border-blue-300 transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border border-[#DCE5F2] flex items-center justify-center text-[#64748B] hover:text-blue-600 hover:border-blue-300 transition-colors" aria-label="YouTube">
                <PlayCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border border-[#DCE5F2] flex items-center justify-center text-[#64748B] hover:text-blue-600 hover:border-blue-300 transition-colors" aria-label="Facebook">
                <Users className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Profil */}
          <div>
            <h4 className="text-sm font-semibold text-[#172033] uppercase tracking-wider mb-4">Tentang Sekolah</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/profil" className="text-[#64748B] hover:text-blue-600 transition-colors">Profil Umum</Link>
              </li>
              <li>
                <Link href="/sejarah" className="text-[#64748B] hover:text-blue-600 transition-colors">Sejarah Singkat</Link>
              </li>
              <li>
                <Link href="/visi-misi" className="text-[#64748B] hover:text-blue-600 transition-colors">Visi &amp; Misi</Link>
              </li>
              <li>
                <Link href="/fasilitas" className="text-[#64748B] hover:text-blue-600 transition-colors">Fasilitas Kampus</Link>
              </li>
              <li>
                <Link href="/galeri" className="text-[#64748B] hover:text-blue-600 transition-colors">Galeri Kegiatan</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Akademik & PPDB */}
          <div>
            <h4 className="text-sm font-semibold text-[#172033] uppercase tracking-wider mb-4">Akademik &amp; PPDB</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/program-keahlian" className="text-[#64748B] hover:text-blue-600 transition-colors">Program Keahlian</Link>
              </li>
              <li>
                <Link href="/ppdb-info" className="text-[#64748B] hover:text-blue-600 transition-colors">Informasi PPDB</Link>
              </li>
              <li>
                <Link href="/ppdb/alur" className="text-[#64748B] hover:text-blue-600 transition-colors">Alur &amp; Syarat</Link>
              </li>
              <li>
                <Link href="/ppdb/status" className="text-[#64748B] hover:text-blue-600 transition-colors">Cek Status PPDB</Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#64748B] hover:text-blue-600 transition-colors">Tanya Jawab (FAQ)</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Kontak & Akses */}
          <div>
            <h4 className="text-sm font-semibold text-[#172033] uppercase tracking-wider mb-4">Kontak &amp; Alamat</h4>
            <ul className="space-y-3 text-sm text-[#64748B]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Jl. Angin Sejuk No. 42, Kota Anyar, Nusantara 60123</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>(031) 8892-1200</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>info@smknegaraangin.sch.id</span>
              </li>
              <li className="pt-2">
                <Link href="/auth/login" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700">
                  Portal Siswa / Guru / Admin
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DCE5F2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} SMK Negara Angin. Seluruh hak cipta dilindungi. Situs simulasi fiktif untuk portofolio UI/UX.</p>
          <div className="flex items-center gap-6">
            <span className="text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-full font-medium">Bright Flow — Material You</span>
            <Link href="/faq" className="hover:text-blue-600">Bantuan</Link>
            <Link href="/kontak" className="hover:text-blue-600">Kontak</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
