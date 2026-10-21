import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { attendance } from '@/lib/data';

export default function GuruPresensiPage() {
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Presensi Kelas" subtitle="Portal Guru">
        <DataTable
          title="Rekap Presensi"
          headers={['Tanggal', 'Mata Pelajaran', 'Siswa', 'Status', 'Catatan']}
          rows={attendance.map(x => [x.date, x.subject, 'Rizky Ramadhan', x.status, x.note || '-'])}
          onAdd="Input Presensi"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
