'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell } from '@/components/dashboard/SectionShell';
import { demoUsers } from '@/lib/data';
import { Mail, Phone, MapPin, GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function GuruProfilPage() {
  const user = demoUsers.find(u => u.role === 'guru')!;
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Profil Saya" subtitle="Portal Guru">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-100 text-3xl font-bold text-violet-600">BS</div>
            <h2 className="mt-4 text-lg font-bold text-[#172033]">{user.name}</h2>
            <p className="text-sm text-[#64748B]">Guru Produktif RPL</p>
            <div className="mt-4 rounded-xl bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700">NIP: 198507152010011003</div>
          </div>
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6">
            <h3 className="text-lg font-bold text-[#172033] mb-5">Informasi Pribadi</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Info icon={Mail} label="Email" value={user.email} />
              <Info icon={Phone} label="Telepon" value="0813-9876-5432" />
              <Info icon={MapPin} label="Alamat" value="Jl. Pendidikan No. 12, Kota Angin" />
              <Info icon={BookOpen} label="Bidang" value="Pemrograman Web & Mobile" />
              <Info icon={GraduationCap} label="Pendidikan" value="S1 Teknik Informatika" />
              <Info icon={Calendar} label="Mulai Mengajar" value="2010" />
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
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F8FF] text-violet-600"><Icon className="h-4 w-4" /></div>
      <div><p className="text-xs font-bold text-[#94A3B8]">{label}</p><p className="mt-0.5 text-sm text-[#172033]">{value}</p></div>
    </div>
  );
}
