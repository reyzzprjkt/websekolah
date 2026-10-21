'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function PPDBKonfirmasiPage() {
  const [regId] = useState(() => typeof window === 'undefined' ? '---' : localStorage.getItem('ppdb_reg_id') || '---');

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <Link href="/ppdb/status" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Cek Status
        </Link>

        <div className="rounded-2xl border border-[#DCE5F2] bg-white p-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-[#172033]">Pendaftaran Berhasil!</h1>
          <p className="mt-3 text-[#64748B]">Terima kasih sudah mendaftar di SMK Negara Angin.</p>
          <div className="mt-6 rounded-xl bg-blue-50 px-6 py-3">
            <span className="text-xs font-bold uppercase text-blue-700">Nomor Pendaftaran</span>
            <p className="mt-1 text-2xl font-extrabold tracking-wider text-blue-700">{regId}</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#DCE5F2] bg-white p-6">
          <h3 className="font-bold text-[#172033] mb-4">Instruksi Selanjutnya</h3>
          <ol className="space-y-3 text-sm text-[#64748B]">
            <li><span className="font-semibold text-[#172033]">1. Verifikasi Email</span> — Cek email untuk link verifikasi akun.</li>
            <li><span className="font-semibold text-[#172033]">2. Cek Status</span> — Gunakan nomor pendaftaran untuk mengecek hasil seleksi.</li>
            <li><span className="font-semibold text-[#172033]">3. Persiapan Dokumen</span> — Siapkan ijazah, KK, dan foto sesuai persyaratan.</li>
            <li><span className="font-semibold text-[#172033]">4. Menunggu Keputusan</span> — Pengumuman sesuai jadwal kalender PPDB.</li>
          </ol>
        </div>

        <div className="mt-6 rounded-xl border border-[#DCE5F2] bg-[#F5F8FF] p-5 text-xs text-[#64748B]">
          Data pendaftaran bersifat simulasi demo — tidak ada data yang tersimpan permanen.
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/ppdb/status" className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700">Cek Status</Link>
          <Link href="/" className="flex-1 rounded-lg border border-[#DCE5F2] px-6 py-3 text-center font-semibold text-[#172033] hover:bg-[#F5F8FF]">Ke Beranda</Link>
        </div>
      </div>
    </main>
  );
}
