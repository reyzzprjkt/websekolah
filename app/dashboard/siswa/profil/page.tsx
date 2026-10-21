'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell } from '@/components/dashboard/SectionShell';
import { demoUsers } from '@/lib/data';
import { Mail, Phone, MapPin, GraduationCap, Calendar } from 'lucide-react';

export default function SiswaProfilPage() {
  const user = demoUsers.find(u => u.role === 'siswa')!;
  return (
    <DashboardLayout role="siswa">
      <SectionShell title="Profil Saya" subtitle="Portal Siswa">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">NP</div>
            <h2 className="mt-4 text-lg font-bold text-[#172033]">{user.name}</h2>
            <p className="text-sm text-[#64748B]">XI RPL 1</p>
            <div className="mt-4 rounded-xl bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">NIS: 2024001</div>
          </div>
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6">
            <h3 className="text-lg font-bold text-[#172033] mb-5">Informasi Pribadi</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Info icon={Mail} label="Email" value={user.email} />
              <Info icon={Phone} label="Telepon" value="0812-3456-7890" />
              <Info icon={MapPin} label="Alamat" value="Jl. Merdeka No. 45, Kota Angin" />
              <Info icon={GraduationCap} label="Program Keahlian" value="Rekayasa Perangkat Lunak" />
              <Info icon={Calendar} label="Tahun Masuk" value="2023" />
              <Info icon={Calendar} label="Tanggal Lahir" value="15 Maret 2008" />
            </div>
          </div>
        </div>
      </SectionShell>
    </DashboardLayout>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F8FF] text-blue-600"><Icon className="h-4 w-4" /></div>
      <div><p className="text-xs font-bold text-[#94A3B8]">{label}</p><p className="mt-0.5 text-sm text-[#172033]">{value}</p></div>
    </div>
  );
}
