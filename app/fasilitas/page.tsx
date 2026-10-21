import { facilities } from '@/lib/data';
import Link from 'next/link';

export const metadata = { title: 'Fasilitas Sekolah' };

export default function FasilitasPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Fasilitas</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Fasilitas Sekolah</h1>
          <p className="mt-4 text-lg text-[#64748B]">Infrastruktur lengkap untuk mendukung pembelajaran dan pengembangan keterampilan siswa.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map(f => (
            <div key={f.name} className="overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={f.image} alt={f.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-[#172033]">{f.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-10">
          <h2 className="text-2xl font-extrabold text-[#172033]">Standar Fasilitas Kami</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              'Teknologi terkini dan upgrade berkala',
              'Keamanan dan kebersihan terjaga',
              'Aksesibilitas untuk semua siswa',
              'Ruang yang nyaman dan inspiratif',
              'Perawatan preventif rutin',
              'Standar internasional',
            ].map(s => (
              <div key={s} className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                <span className="text-sm font-medium text-[#172033]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
