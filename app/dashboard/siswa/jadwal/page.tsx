import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { schedule } from '@/lib/data';

export default function SiswaJadwalPage() {
  return (
    <DashboardLayout role="siswa">
      <SectionShell title="Jadwal Pelajaran" subtitle="Portal Siswa">
        <DataTable
          title="Jadwal Minggu Ini"
          headers={['Hari', 'Jam', 'Mata Pelajaran', 'Guru', 'Ruangan']}
          rows={schedule.map(x => [x.day, x.time, x.subject, x.teacher, x.room])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
