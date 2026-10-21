'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, BookOpen, CalendarDays, ChevronLeft, ClipboardCheck, FileText, GraduationCap, Image, LayoutDashboard, LogOut, Menu, Settings, Users, X } from 'lucide-react';
import { useState } from 'react';

type Role = 'siswa' | 'guru' | 'admin';

const roleData = {
  siswa: { label: 'Portal Siswa', person: 'Nadia Putri Ramadhani', subtitle: 'XI RPL 1', avatar: 'NP', color: 'bg-blue-600', base: '/dashboard/siswa', items: [
    ['Overview', '', LayoutDashboard], ['Profil Saya', '/profil', Users], ['Jadwal Pelajaran', '/jadwal', CalendarDays], ['Tugas', '/tugas', ClipboardCheck], ['Nilai', '/nilai', GraduationCap], ['Presensi', '/presensi', FileText], ['Pengumuman', '/pengumuman', Bell],
  ] },
  guru: { label: 'Portal Guru', person: 'Budi Santoso, S.Kom.', subtitle: 'Guru Produktif RPL', avatar: 'BS', color: 'bg-violet-600', base: '/dashboard/guru', items: [
    ['Overview', '', LayoutDashboard], ['Profil Saya', '/profil', Users], ['Jadwal Mengajar', '/jadwal', CalendarDays], ['Daftar Kelas', '/kelas', BookOpen], ['Daftar Tugas', '/tugas', ClipboardCheck], ['Kelola Tugas', '/kelola-tugas', FileText], ['Presensi Kelas', '/presensi', ClipboardCheck], ['Input Nilai', '/nilai', GraduationCap],
  ] },
  admin: { label: 'Admin Sekolah', person: 'Siti Rahmawati', subtitle: 'Administrator', avatar: 'SR', color: 'bg-emerald-600', base: '/dashboard/admin', items: [
    ['Overview', '', LayoutDashboard], ['Hero Slider', '/hero-slider', Image], ['Manajemen Berita', '/berita', FileText], ['Manajemen Agenda', '/agenda', CalendarDays], ['Manajemen Galeri', '/galeri', FileText], ['Program Keahlian', '/program-keahlian', BookOpen], ['Data Siswa', '/siswa', Users], ['Data Guru', '/guru', Users], ['Manajemen PPDB', '/ppdb', ClipboardCheck], ['Pengumuman', '/pengumuman', Bell], ['Pengguna & Role', '/pengguna', Users], ['Pengaturan', '/pengaturan', Settings],
  ] },
} as const;

export default function DashboardLayout({ role, children }: { role: Role; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const data = roleData[role];
  const nav = (
    <aside className="flex h-full w-72 flex-col bg-white border-r border-[#DCE5F2]">
      <div className="flex h-20 items-center gap-3 border-b border-[#DCE5F2] px-5">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${data.color}`}><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M9 5a2 2 0 1 1 1.4 3.4H3m10 11.6a2 2 0 1 0 1.4-3.4H3m14-8.2A2.5 2.5 0 1 1 19 12H3" strokeLinecap="round"/></svg></div>
        <div><p className="font-bold leading-5 text-[#172033]">SMK Negara Angin</p><p className="text-xs text-[#64748B]">{data.label}</p></div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3" aria-label="Navigasi dashboard">
        <p className="px-3 pb-2 pt-2 text-[11px] font-bold uppercase tracking-widest text-[#94A3B8]">Menu</p>
        {data.items.map(([label, suffix, Icon]) => {
          const href = `${data.base}${suffix}`;
          const active = pathname === href || (suffix === '/tugas' && pathname.startsWith(`${data.base}/tugas/`));
          return <Link key={href} href={href} onClick={() => setOpen(false)} className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? 'bg-blue-50 text-blue-700' : 'text-[#64748B] hover:bg-[#F5F8FF] hover:text-[#172033]'}`}><Icon className="h-[18px] w-[18px]" />{label}</Link>;
        })}
      </nav>
      <div className="border-t border-[#DCE5F2] p-3">
        <Link href="/" className="mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#64748B] hover:bg-[#F5F8FF]"><ChevronLeft className="h-[18px] w-[18px]" />Kembali ke website</Link>
        <Link href="/auth/login" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"><LogOut className="h-[18px] w-[18px]" />Keluar demo</Link>
      </div>
    </aside>
  );
  return <div className="min-h-screen bg-[#F5F8FF]">
    <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">{nav}</div>
    {open && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-[#172033]/35" onClick={() => setOpen(false)} aria-label="Tutup navigasi"/><div className="relative h-full w-72 shadow-2xl">{nav}<button className="absolute right-3 top-5 rounded-lg p-2 text-[#64748B] hover:bg-slate-100" onClick={() => setOpen(false)} aria-label="Tutup"><X className="h-5 w-5"/></button></div></div>}
    <main className="lg:pl-72"><header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#DCE5F2] bg-white/90 px-4 backdrop-blur-md sm:px-7"><button className="rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF] lg:hidden" onClick={() => setOpen(true)} aria-label="Buka navigasi"><Menu/></button><div className="hidden sm:block"><p className="text-xs text-[#64748B]">{data.label}</p><p className="font-semibold text-[#172033]">Tahun Ajaran 2024/2025</p></div><div className="ml-auto flex items-center gap-3"><button className="relative rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF]" aria-label="Notifikasi"><Bell className="h-5 w-5"/><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"/></button><div className="hidden text-right sm:block"><p className="text-sm font-semibold text-[#172033]">{data.person}</p><p className="text-xs text-[#64748B]">{data.subtitle}</p></div><div className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ${data.color}`}>{data.avatar}</div></div></header><div className="mx-auto max-w-[1600px] p-4 sm:p-7">{children}</div></main>
  </div>;
}
