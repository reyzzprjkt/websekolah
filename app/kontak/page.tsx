'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { websiteSettings } from '@/lib/data';

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Kontak</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Hubungi Kami</h1>
          <p className="mt-4 text-lg text-[#64748B]">Punya pertanyaan seputar PPDB, kurikulum, atau kerja sama industri? Hubungi tim kami.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#DCE5F2] bg-white p-7">
              <h2 className="text-lg font-bold text-[#172033] mb-5">Informasi Kontak</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><MapPin className="h-5 w-5" /></div>
                  <div><p className="text-xs font-bold uppercase text-[#94A3B8]">Alamat</p><p className="mt-1 text-sm text-[#172033] leading-relaxed">{websiteSettings.address}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><Phone className="h-5 w-5" /></div>
                  <div><p className="text-xs font-bold uppercase text-[#94A3B8]">Telepon</p><p className="mt-1 text-sm text-[#172033]">{websiteSettings.phone}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600"><Mail className="h-5 w-5" /></div>
                  <div><p className="text-xs font-bold uppercase text-[#94A3B8]">Email</p><p className="mt-1 text-sm text-[#172033]">{websiteSettings.email}</p></div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-6 text-sm text-[#64748B]">
              <p className="font-bold text-[#172033] mb-2">Jam Layanan Tata Usaha</p>
              <p>Senin – Kamis: 07.30 - 15.30 WIB<br/>Jumat: 07.30 - 11.30 WIB<br/>Sabtu, Minggu & Hari Libur Nasional: Tutup</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-8">
            <h2 className="text-xl font-bold text-[#172033] mb-2">Kirim Pesan</h2>
            <p className="text-xs text-[#94A3B8] mb-6">Formulir demo interaktif. Tidak mengirim email nyata.</p>

            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
                <h3 className="text-lg font-bold text-[#172033]">Pesan Terkirim!</h3>
                <p className="mt-1 text-sm text-[#64748B]">Terima kasih atas pesan Anda. Ini adalah simulasi respons frontend demo.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white">Kirim Pesan Lain</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1">Nama Lengkap</label>
                    <input required className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Nama Anda"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1">Email</label>
                    <input required type="email" className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="email@contoh.com"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">Subjek</label>
                  <input required className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" value={form.subject} onChange={e=>setForm({...form, subject: e.target.value})} placeholder="Topik pertanyaan"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">Pesan</label>
                  <textarea required rows={4} className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."/>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <Send className="h-4 w-4" /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
