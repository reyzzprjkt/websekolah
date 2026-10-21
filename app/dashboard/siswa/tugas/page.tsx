import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { assignments } from '@/lib/data';

export default function SiswaTugasPage() {
  return (
    <DashboardLayout role="siswa">
      <SectionShell title="Daftar Tugas" subtitle="Portal Siswa">
        <DataTable
          title="Tugas Semester Ini"
          headers={['Tugas', 'Mata Pelajaran', 'Batas Pengumpulan', 'Status']}
          rows={assignments.map(x => [x.title, x.subject, x.dueDate, x.status])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
