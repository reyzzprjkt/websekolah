'use client';

import Link from 'next/link';
import { ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) return setError('Password minimal 8 karakter.');
    if (password !== confirmation) return setError('Konfirmasi password belum sama.');
    setError('');
    setDone(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8FF] px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/auth/login" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Halaman Masuk
        </Link>

        <div className="rounded-2xl border border-[#DCE5F2] bg-white p-7 shadow-sm">
          <h1 className="text-2xl font-extrabold text-[#172033]">Buat Password Baru</h1>
          <p className="mt-2 text-sm text-[#64748B]">Simulasi reset password akun portal sekolah.</p>

          {done ? (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
              <h2 className="text-base font-bold text-[#172033]">Password Berhasil Diubah</h2>
              <p className="mt-1 text-xs text-[#64748B]">Perubahan ini hanya simulasi frontend dan tidak disimpan permanen.</p>
              <Link href="/auth/login" className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700">Kembali Masuk</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#172033] mb-1">Password Baru</label>
                <div className="relative"><Lock className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" /><input required type="password" className="w-full rounded-lg border border-[#DCE5F2] pl-9 pr-3 py-2.5 text-sm" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Minimal 8 karakter" /></div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172033] mb-1">Konfirmasi Password</label>
                <div className="relative"><Lock className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" /><input required type="password" className="w-full rounded-lg border border-[#DCE5F2] pl-9 pr-3 py-2.5 text-sm" value={confirmation} onChange={e=>setConfirmation(e.target.value)} placeholder="Ulangi password baru" /></div>
              </div>
              {error && <p className="rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-700">{error}</p>}
              <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700">Simpan Password Baru</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
