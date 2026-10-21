import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { students } from '@/lib/data';

export default function AdminSiswaPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Data Siswa" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Siswa"
          headers={['NIS', 'Nama', 'Kelas', 'Program Keahlian', 'Email']}
          rows={students.map(x => [x.nis, x.name, x.class, x.major, x.email])}
          onAdd="Tambah Siswa"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
