import { notFound } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { announcements, studentStats, teacherStats, adminStats } from '@/lib/data';
import { CheckCircle2, Clock, FileText, Users, CalendarDays, Award } from 'lucide-react';

type Role = 'siswa' | 'guru' | 'admin';

const labels: Record<Role, string> = { siswa: 'Portal Siswa', guru: 'Portal Guru', admin: 'Admin Sekolah' };

export function generateStaticParams() {
  return [{ role: 'siswa' }, { role: 'guru' }, { role: 'admin' }];
}

export default async function DashboardOverviewPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!(role in labels)) notFound();

  const stats = role === 'siswa' ? studentStats : role === 'guru' ? teacherStats : adminStats;

  return (
    <DashboardLayout role={role as Role}>
      <div>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-sm text-[#64748B]">{labels[role as Role]}</p><h1 className="mt-1 text-3xl font-extrabold text-[#172033]">Overview</h1></div>
          <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">Data demo / fiktif</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = [Users, Award, FileText, CheckCircle2][i];
            return (
              <div key={stat.label} className="rounded-2xl border border-[#DCE5F2] bg-white p-5">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-5 w-5" /></span>
                  {stat.change && <span className="text-xs font-semibold text-emerald-600">{stat.change}</span>}
                </div>
                <p className="mt-5 text-sm text-[#64748B]">{stat.label}</p>
                <p className="mt-1 text-2xl font-extrabold text-[#172033]">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6">
            <h2 className="font-bold text-[#172033]">Pengumuman Terbaru</h2>
            <div className="mt-4 space-y-3">
              {announcements.slice(0, 3).map(a => (
                <div key={a.id} className="flex gap-3 rounded-xl bg-[#F5F8FF] p-4">
                  <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${a.priority === 'urgent' ? 'bg-red-500' : a.priority === 'important' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                  <div>
                    <p className="text-sm font-semibold text-[#172033]">{a.title}</p>
                    <p className="mt-1 text-xs text-[#64748B]">{a.date} · {a.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6">
            <h2 className="font-bold text-[#172033]">Aktivitas Cepat</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-[#DCE5F2] p-3 text-sm font-medium text-[#172033]"><CalendarDays className="h-4 w-4 text-blue-600" />Lihat jadwal hari ini</div>
              <div className="flex items-center gap-3 rounded-xl border border-[#DCE5F2] p-3 text-sm font-medium text-[#172033]"><FileText className="h-4 w-4 text-blue-600" />Periksa tugas terbaru</div>
              <div className="flex items-center gap-3 rounded-xl border border-[#DCE5F2] p-3 text-sm font-medium text-[#172033]"><Clock className="h-4 w-4 text-blue-600" />Ringkasan kehadiran</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
