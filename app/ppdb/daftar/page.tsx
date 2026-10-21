'use client';

import Link from 'next/link';
import { ArrowLeft, User, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function PPDBDaftarPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nama: '', email: '', telepon: '', asalSekolah: '', alamat: '',
    pilihanJurusan: 'rekayasa-perangkat-lunak', username: '', password: '',
  });
  const [status, setStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setStep(2);
      localStorage.setItem('ppdb_reg_id', 'PPDB-2024-' + Math.floor(Math.random()*100000));
    }, 800);
  };

  if (status === 'success') {
    const regId = localStorage.getItem('ppdb_reg_id') || '---';
    return (
      <main className="pt-20 pb-20">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h1 className="text-3xl font-extrabold text-[#172033]">Pendaftaran Berhasil!</h1>
            <p className="mt-3 text-[#64748B]">Data kamu telah terdaftar. Silakan cek status pendaftaran menggunakan nomor pendaftaran di bawah.</p>
            <div className="mt-6 rounded-xl bg-blue-50 px-6 py-3">
              <span className="text-xs font-bold uppercase text-blue-700">Nomor Pendaftaran</span>
              <p className="mt-1 text-2xl font-extrabold text-blue-700 tracking-wider">{regId}</p>
            </div>
            <div className="mt-8 flex gap-3">
              <Link href="/ppdb/status" className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Cek Status
              </Link>
              <Link href="/" className="flex-1 rounded-lg border border-[#DCE5F2] bg-white px-6 py-3 font-semibold text-[#172033] hover:bg-[#F5F8FF]">
                Ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <Link href="/ppdb/alur" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Alur Pendaftaran
        </Link>

        <h1 className="text-3xl font-extrabold text-[#172033]">Formulir Pendaftaran</h1>
        <p className="mt-2 text-sm text-[#64748B]">Semua data di halaman ini bersifat simulasi frontend. Tidak ada pengiriman data ke server.</p>

        <div className="mt-6 rounded-2xl border border-[#DCE5F2] bg-white p-6">
          <div className="mb-6 flex items-center gap-2 text-sm">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-[#64748B]'}`}>1</span>
            <span className="font-semibold text-[#172033]">Data Diri</span>
            <div className="mx-3 flex-1 h-0.5 bg-gray-100" />
            <span className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-[#64748B]'}`}>2</span>
            <span className="font-semibold text-[#172033]">Akun & Konfirmasi</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-[#172033]">Nama Lengkap</label>
                <div className="relative"><User className="absolute left-3 top-3 h-5 w-5 text-gray-400"/><input required className="w-full rounded-lg border border-[#DCE5F2] pl-10 pr-4 py-2.5 text-sm" value={formData.nama} onChange={e=>setFormData({...formData, nama:e.target.value})} placeholder="Nama lengkap"/></div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-[#172033]">Email</label>
                <div className="relative"><Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400"/><input required type="email" className="w-full rounded-lg border border-[#DCE5F2] pl-10 pr-4 py-2.5 text-sm" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} placeholder="email@example.com"/></div>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-[#172033]">No. Telepon/WhatsApp</label>
              <div className="relative"><Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400"/><input required className="w-full rounded-lg border border-[#DCE5F2] pl-10 pr-4 py-2.5 text-sm" value={formData.telepon} onChange={e=>setFormData({...formData, telepon:e.target.value})} placeholder="08xxxxxxxxxx"/></div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-[#172033]">Asal Sekolah</label>
              <input required className="w-full rounded-lg border border-[#DCE5F2] px-4 py-2.5 text-sm" value={formData.asalSekolah} onChange={e=>setFormData({...formData, asalSekolah:e.target.value})} placeholder="Nama SMP/MTs"/>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-[#172033]">Alamat Lengkap</label>
              <div className="relative"><MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400"/><textarea required rows={3} className="w-full rounded-lg border border-[#DCE5F2] pl-10 pr-4 py-2.5 text-sm" value={formData.alamat} onChange={e=>setFormData({...formData, alamat:e.target.value})} placeholder="Alamat lengkap"/></div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-[#172033]">Pilih Program Keahlian</label>
              <select className="w-full rounded-lg border border-[#DCE5F2] px-4 py-2.5 text-sm" value={formData.pilihanJurusan} onChange={e=>setFormData({...formData, pilihanJurusan:e.target.value})}>
                <option value="rekayasa-perangkat-lunak">Rekayasa Perangkat Lunak</option>
                <option value="desain-komunikasi-visual">Desain Komunikasi Visual</option>
                <option value="teknik-jaringan-komputer">Teknik Jaringan Komputer</option>
                <option value="bisnis-digital">Bisnis Digital</option>
              </select>
            </div>

            <div className="rounded-xl bg-[#F5F8FF] p-5 text-sm">
              <p className="font-bold text-[#172033]">Informasi Akun Demo</p>
              <p className="mt-1 text-[#64748B]">Nomor pendaftaran akan dibuat secara otomatis. Password digunakan untuk cek status.</p>
            </div>

            <div className="pt-4">
              <button type="button" onClick={() => setStep(1)} disabled={step===1} className="mr-3 rounded-lg border border-[#DCE5F2] px-5 py-3 text-sm font-semibold text-[#64748B] disabled:opacity-40">Kembali</button>
              <button type="submit" disabled={status==='submitting'} className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50">
                {status==='submitting' ? 'Mendaftar...' : 'Daftar Sekarang'}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[#94A3B8]">Simulasi demo — tidak ada data yang dikirim ke server.</p>
      </div>
    </main>
  );
}
