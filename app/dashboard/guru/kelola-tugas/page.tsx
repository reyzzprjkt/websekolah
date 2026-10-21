import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { assignments } from '@/lib/data';

export default function GuruKelolaTugasPage() {
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Kelola Tugas" subtitle="Portal Guru">
        <DataTable
          title="Manajemen Tugas"
          headers={['Tugas', 'Mata Pelajaran', 'Batas Pengumpulan', 'Status']}
          rows={assignments.map(x => [x.title, x.subject, x.dueDate, x.status])}
          onAdd="Tambah Tugas"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
