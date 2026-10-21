import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { classes } from '@/lib/data';

export default function GuruKelasPage() {
  return (
    <DashboardLayout role="guru">
      <SectionShell title="Daftar Kelas" subtitle="Portal Guru">
        <DataTable
          title="Kelas yang Diampu"
          headers={['Kelas', 'Program Keahlian', 'Wali Kelas', 'Jumlah Siswa']}
          rows={classes.map(x => [x.name, x.major, x.homeroom, x.studentCount])}
        />
      </SectionShell>
    </DashboardLayout>
  );
}
