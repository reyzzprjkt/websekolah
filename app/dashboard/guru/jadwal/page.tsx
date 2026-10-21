import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { schedule } from '@/lib/data';

export default function GuruJadwalPage() {
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Jadwal Mengajar" subtitle="Portal Guru">
        <DataTable
          title="Jadwal Mengajar Minggu Ini"
          headers={['Hari', 'Jam', 'Mata Pelajaran', 'Kelas', 'Ruangan']}
          rows={schedule.slice(0, 15).map(x => [x.day, x.time, x.subject, 'XI RPL 1', x.room])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
