import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { news } from '@/lib/data';

export default function AdminBeritaPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Manajemen Berita" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Berita"
          headers={['Judul', 'Kategori', 'Tanggal', 'Penulis']}
          rows={news.map(x => [x.title, x.category, x.date, x.author])}
          onAdd="Tambah Berita"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
