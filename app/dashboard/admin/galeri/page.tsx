import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { gallery } from '@/lib/data';

export default function AdminGaleriPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Manajemen Galeri" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Foto"
          headers={['Judul', 'Kategori', 'Tanggal']}
          rows={gallery.map(x => [x.title, x.category, x.date])}
          onAdd="Upload Foto"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
