import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { events } from '@/lib/data';

export default function AdminAgendaPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Manajemen Agenda" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Agenda"
          headers={['Judul', 'Tanggal', 'Waktu', 'Lokasi', 'Jenis']}
          rows={events.map(x => [x.title, x.date, x.time, x.location, x.type])}
          onAdd="Tambah Agenda"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
