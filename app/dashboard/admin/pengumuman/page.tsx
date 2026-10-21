import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell } from '@/components/dashboard/SectionShell';
import { announcements } from '@/lib/data';

export default function AdminPengumumanPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Pengumuman" subtitle="Admin Sekolah">
        <div className="space-y-4">
          {announcements.map(a => (
            <div key={a.id} className="rounded-2xl border border-[#DCE5F2] bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${a.priority === 'urgent' ? 'bg-red-500' : a.priority === 'important' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#172033]">{a.title}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${a.priority === 'urgent' ? 'bg-red-100 text-red-700' : a.priority === 'important' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{a.priority}</span>
                    </div>
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{a.content}</p>
                    <p className="mt-3 text-xs text-[#94A3B8]">{a.date} · {a.author}</p>
                  </div>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button className="rounded-lg border border-[#DCE5F2] px-3 py-1.5 text-xs font-semibold text-[#64748B] hover:bg-[#F5F8FF]">Edit</button>
                  <button className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </DashboardLayout>
  );
}
