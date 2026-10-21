'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, Lock, Mail, ShieldCheck } from 'lucide-react';
import { demoUsers } from '@/lib/data';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'siswa' | 'guru' | 'admin'>('siswa');
  const [email, setEmail] = useState('rizky.ramadhan@siswa.smknegaraangin.sch.id');
  const [password, setPassword] = useState('demo12345');

  const handleQuickSelect = (r: 'siswa' | 'guru' | 'admin') => {
    setRole(r);
    const u = demoUsers.find(x => x.role === r);
    if (u) setEmail(u.email);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/dashboard/${role}`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8FF] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">SA</span>
            <span className="text-left"><b className="block text-sm tracking-tight text-[#172033]">SMK NEGARA ANGIN</b><small className="text-[10px] font-semibold text-blue-600">PORTAL AKADEMIK</small></span>
          </Link>
          <h1 className="text-2xl font-extrabold text-[#172033]">Masuk ke Portal</h1>
          <p className="mt-1 text-sm text-[#64748B]">Pilih peran untuk simulasi masuk langsung</p>
        </div>

        <div className="rounded-2xl border border-[#DCE5F2] bg-white p-7 shadow-sm">
          <div className="mb-6 grid grid-cols-3 gap-2 rounded-xl bg-[#F5F8FF] p-1.5">
            {(['siswa', 'guru', 'admin'] as const).map(r => (
              <button
                key={r}
                type="button"
                onClick={() => handleQuickSelect(r)}
                className={`rounded-lg py-2 text-xs font-bold capitalize transition ${
                  role === r ? 'bg-white text-blue-600 shadow-sm' : 'text-[#64748B] hover:text-[#172033]'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#172033] mb-1">Email / NIS / NIP</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-[#DCE5F2] pl-9 pr-3 py-2.5 text-sm"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-[#172033]">Password</label>
                <Link href="/auth/lupa-password" className="text-xs text-blue-600 hover:underline">Lupa password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
                <input
                  required
                  type="password"
                  className="w-full rounded-lg border border-[#DCE5F2] pl-9 pr-3 py-2.5 text-sm"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              Masuk sebagai {role.toUpperCase()} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 text-xs text-[#64748B]">
            <p className="flex items-center gap-1.5 font-bold text-blue-700 mb-1">
              <ShieldCheck className="h-4 w-4" /> Mode Simulasi Demo
            </p>
            Klik tombol Masuk langsung mengarahkan ke dashboard peran terpilih. Tanpa database nyata.
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#64748B]">
          Calon siswa baru?{' '}
          <Link href="/ppdb/daftar" className="font-bold text-blue-600 hover:underline">Daftar PPDB di sini</Link>
        </p>
      </div>
    </main>
  );
}
