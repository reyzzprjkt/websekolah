import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { teachers } from '@/lib/data';

export default function AdminGuruPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Data Guru" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Guru"
          headers={['NIP', 'Nama', 'Mata Pelajaran', 'Jabatan', 'Email']}
          rows={teachers.map(x => [x.nip, x.name, x.subject, x.position, x.email])}
          onAdd="Tambah Guru"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
