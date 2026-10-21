import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { assignments } from '@/lib/data';

export default function GuruTugasPage() {
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Daftar Tugas" subtitle="Portal Guru">
        <DataTable
          title="Tugas yang Diberikan"
          headers={['Tugas', 'Mata Pelajaran', 'Batas Pengumpulan', 'Status']}
          rows={assignments.map(x => [x.title, x.subject, x.dueDate, x.status])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
