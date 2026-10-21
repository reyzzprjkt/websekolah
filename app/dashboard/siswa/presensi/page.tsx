import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { attendance } from '@/lib/data';

export default function SiswaPresensiPage() {
  return (
    <DashboardLayout role="siswa">
      <SectionShell title="Riwayat Presensi" subtitle="Portal Siswa">
        <DataTable
          title="Kehadiran Semester Ini"
          headers={['Tanggal', 'Mata Pelajaran', 'Status', 'Catatan']}
          rows={attendance.map(x => [x.date, x.subject, x.status, x.note || '-'])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
