'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell } from '@/components/dashboard/SectionShell';
import { websiteSettings } from '@/lib/data';
import { useState } from 'react';
import { CheckCircle2, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function AdminPengaturanPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: websiteSettings.schoolName,
    email: websiteSettings.email,
    phone: websiteSettings.phone,
    address: websiteSettings.address,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout role="admin">
      <SectionShell title="Pengaturan" subtitle="Admin Sekolah">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6">
            <h3 className="text-lg font-bold text-[#172033] mb-5">Informasi Sekolah</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <Field icon={Globe} label="Nama Sekolah" value={form.name} onChange={v => setForm({ ...form, name: v })} />
              <Field icon={Mail} label="Email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
              <Field icon={Phone} label="Telepon" value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
              <Field icon={MapPin} label="Alamat" value={form.address} onChange={v => setForm({ ...form, address: v })} />
              <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                Simpan Perubahan (Demo)
              </button>
              {saved && (
                <p className="flex items-center gap-2 text-sm font-semibold text-green-600">
                  <CheckCircle2 className="h-4 w-4" /> Tersimpan (simulasi — tidak permanen)
                </p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6">
            <h3 className="text-lg font-bold text-[#172033] mb-5">Pengaturan Sistem</h3>
            <div className="space-y-4">
              <Toggle label="Mode Maintenance" description="Aktifkan halaman maintenance untuk pengunjung" />
              <Toggle label="Pendaftaran PPDB" description="Buka/tutup formulir pendaftaran PPDB online" defaultOn />
              <Toggle label="Notifikasi Email" description="Kirim notifikasi email untuk pendaftaran baru" defaultOn />
            </div>
            <p className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
              Semua pengaturan bersifat simulasi demo dan tidak tersimpan permanen.
            </p>
          </div>
        </div>
      </SectionShell>
    </DashboardLayout>
  );
}

function Field({ icon: Icon, label, value, onChange }: { icon: typeof Globe; label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs font-bold text-[#172033] mb-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-4 w-4 text-[#94A3B8]" />
        <input className="w-full rounded-lg border border-[#DCE5F2] py-2.5 pl-9 pr-3 text-sm" value={value} onChange={e => onChange(e.target.value)} />
      </div>
    </div>
  );
}

function Toggle({ label, description, defaultOn }: { label: string; description: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn || false);
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#DCE5F2] p-4">
      <div><p className="text-sm font-semibold text-[#172033]">{label}</p><p className="text-xs text-[#64748B]">{description}</p></div>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className={`relative h-7 w-12 rounded-full transition-colors ${on ? 'bg-blue-600' : 'bg-slate-200'}`}
        role="switch"
        aria-checked={on}
        aria-label={label}
      >
        <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${on ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}
