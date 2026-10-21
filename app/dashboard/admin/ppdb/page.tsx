import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { ppdbRegistrations } from '@/lib/data';

export default function AdminPPDBPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Manajemen PPDB" subtitle="Admin Sekolah">
        <DataTable
          title="Pendaftaran PPDB"
          headers={['Nomor', 'Nama', 'Asal Sekolah', 'Jurusan Pilihan', 'Status']}
          rows={ppdbRegistrations.map(x => [x.registrationNumber, x.name, x.previousSchool, x.major, x.status])}
          onAdd="Tambah Pendaftar"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
