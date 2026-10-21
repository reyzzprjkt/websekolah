'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell, DataTable } from '@/components/dashboard/SectionShell';
import { demoUsers } from '@/lib/data';

export default function AdminPenggunaPage() {
  return (
    <DashboardLayout role="admin">
      <SectionShell title="Pengguna & Role" subtitle="Admin Sekolah">
        <DataTable
          title="Daftar Pengguna"
          headers={['Nama', 'Email', 'Role']}
          rows={demoUsers.map(x => [x.name, x.email, x.role.toUpperCase()])}
          onAdd="Tambah Pengguna"
        />
      </SectionShell>
    </DashboardLayout>
  );
}
