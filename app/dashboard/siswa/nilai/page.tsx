import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { grades } from '@/lib/data';

export default function SiswaNilaiPage() {
  return (
    <DashboardLayout role="siswa">
      <SectionShell title="Nilai Semester" subtitle="Portal Siswa">
        <DataTable
          title="Rekap Nilai"
          headers={['Mata Pelajaran', 'Guru', 'Tugas', 'UTS', 'UAS', 'Rata-rata']}
          rows={grades.map(x => [x.subject, x.teacher, x.tugas, x.uts, x.uas, x.average])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
