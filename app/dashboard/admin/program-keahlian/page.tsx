import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { majors } from '@/lib/data';

export default function AdminProgramKeahlianPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Program Keahlian" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Program Keahlian"
          headers={['Nama Program', 'Singkatan', 'Deskripsi']}
          rows={majors.map(x => [x.name, x.shortName, x.description.slice(0, 80) + '...'])}
          onAdd="Tambah Program"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
