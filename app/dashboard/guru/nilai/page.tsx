import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { grades } from '@/lib/data';

export default function GuruNilaiPage() {
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Input Nilai" subtitle="Portal Guru">
        <DataTable
          title="Rekap Nilai Siswa"
          headers={['Mata Pelajaran', 'Siswa', 'Tugas', 'UTS', 'UAS', 'Rata-rata']}
          rows={grades.map(x => [x.subject, 'Rizky Ramadhan', x.tugas, x.uts, x.uas, x.average])}
          onAdd="Input Nilai"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
