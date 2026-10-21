'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function LupaPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8FF] px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/auth/login" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Halaman Masuk
        </Link>

        <div className="rounded-2xl border border-[#DCE5F2] bg-white p-7 shadow-sm">
          <h1 className="text-2xl font-extrabold text-[#172033]">Lupa Password</h1>
          <p className="mt-2 text-sm text-[#64748B]">Masukkan email akun sekolah Anda untuk menerima instruksi pemulihan password.</p>

          {sent ? (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
              <h2 className="text-base font-bold text-[#172033]">Instruksi Terkirim!</h2>
              <p className="mt-1 text-xs text-[#64748B]">
                Kami telah mengirim tautan reset ke <b className="text-[#172033]">{email}</b> (simulasi demo).
              </p>
              <Link
                href="/auth/reset-password"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Lanjut ke Form Reset Demo →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#172033] mb-1">Email Terdaftar</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-[#DCE5F2] pl-9 pr-3 py-2.5 text-sm"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="nama@siswa.smknegaraangin.sch.id"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                <Send className="h-4 w-4" /> Kirim Tautan Pemulihan
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
