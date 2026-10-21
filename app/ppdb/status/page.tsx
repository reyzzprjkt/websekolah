'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

type RegistrationStatus = {
  nama: string;
  jurusan: string;
  status: 'diterima' | 'menunggu';
  date: string;
};

export default function PPDBStatusPage() {
  const [id, setId] = useState('');
  const [found, setFound] = useState<RegistrationStatus | null>(null);

  const checkStatus = () => {
    if (!id) return;
    const registrations: Record<string, RegistrationStatus> = {
      'PPDB-2024-12345': { nama: 'Ahmad Fadli', jurusan: 'Rekayasa Perangkat Lunak', status: 'diterima', date: '10 Juni 2024' },
      'PPDB-2024-67890': { nama: 'Siti Rahayu', jurusan: 'Desain Komunikasi Visual', status: 'menunggu', date: '25 Mei 2024' },
    };
    setFound(registrations[id] || null);
  };

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <Link href="/ppdb-info" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Informasi PPDB
        </Link>

        <h1 className="text-3xl font-extrabold text-[#172033]">Cek Status Pendaftaran</h1>
        <p className="mt-2 text-sm text-[#64748B]">Masukkan nomor pendaftaran untuk melihat status kamu. Data simulasi.</p>

        <div className="mt-8 rounded-2xl border border-[#DCE5F2] bg-white p-6">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Contoh: PPDB-2024-12345"
              className="flex-1 rounded-lg border border-[#DCE5F2] px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <button onClick={checkStatus} className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700">Cek Status</button>
          </div>

          {!id && (
            <div className="mt-6 rounded-xl bg-[#F5F8FF] p-4 text-center text-xs text-[#64748B]">
              Demo ID yang tersedia: PPDB-2024-12345 (diterima), PPDB-2024-67890 (menunggu)
            </div>
          )}

          {found && (
            <div className="mt-8 rounded-xl border border-[#DCE5F2] p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#94A3B8]">Nomor Pendaftaran</span>
                <span className="font-mono font-bold text-[#172033]">{id}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#172033]">{found.nama}</h2>
              <p className="mt-1 text-sm text-[#64748B]">Jurusan: <span className="font-semibold text-[#172033]">{found.jurusan}</span></p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold">
                {found.status === 'diterima' ? (
                  <span className="flex items-center gap-1 text-green-700 bg-green-100"><CheckCircle2 className="h-4 w-4"/> Diterima</span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-700 bg-amber-100"><Clock className="h-4 w-4"/> Menunggu Verifikasi</span>
                )}
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-3">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8]">Tanggal Pendaftaran</span>
                  <p className="text-sm font-semibold text-[#172033]">{found.date}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8]">Langkah Selanjutnya</span>
                  <p className="text-sm text-[#172033]">{found.status === 'diterima' ? 'Lakukan daftar ulang sesuai jadwal.' : 'Tunggu verifikasi tim panitia.'}</p>
                </div>
              </div>
            </div>
          )}

          {id && !found && (
            <div className="mt-8 rounded-xl border border-red-100 bg-red-50 p-6 text-center">
              <AlertTriangle className="mx-auto mb-2 h-8 w-8 text-red-500"/>
              <p className="text-sm font-semibold text-red-700">Nomor pendaftaran tidak ditemukan.</p>
              <p className="mt-1 text-xs text-red-600">Pastikan kamu memasukkan ID yang benar. Coba contoh demo ID.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
