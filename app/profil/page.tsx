import { schoolProfile } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'Profil Sekolah' };

export default function ProfilPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Profil Sekolah</span>
        </nav>
        
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Profil SMK Negara Angin</h1>
          <p className="mt-3 text-lg text-[#64748B]">Mengenal lebih jauh tentang sekolah kami, visi, misi, dan komitmen kami terhadap pendidikan berkualitas.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-8">
            <img src="https://images.unsplash.com/photo-1427504494785-cdfc993f6664?w=600&q=85" alt="Gedung SMK Negara Angin" className="mb-6 h-80 w-full rounded-xl object-cover" />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#DCE5F2] bg-white p-4 text-center">
                <b className="text-2xl text-blue-600">1.240+</b><p className="mt-1 text-xs text-[#64748B]">Siswa Aktif</p>
              </div>
              <div className="rounded-xl border border-[#DCE5F2] bg-white p-4 text-center">
                <b className="text-2xl text-blue-600">4</b><p className="mt-1 text-xs text-[#64748B]">Program Keahlian</p>
              </div>
              <div className="rounded-xl border border-[#DCE5F2] bg-white p-4 text-center">
                <b className="text-2xl text-blue-600">80+</b><p className="mt-1 text-xs text-[#64748B]">Pendidik</p>
              </div>
              <div className="rounded-xl border border-[#DCE5F2] bg-white p-4 text-center">
                <b className="text-2xl text-blue-600">92%</b><p className="mt-1 text-xs text-[#64748B]">Lulusan Terserap</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-3 font-bold text-[#172033]">Tentang SMK Negara Angin</h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                {schoolProfile.split('\n\n').map((p, i) => <p key={i} className="text-sm">{p}</p>)}
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Link href="/sejarah" className="flex items-center gap-2 rounded-lg border border-[#DCE5F2] px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50">
                Sejarah Sekolah <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/visi-misi" className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                Visi & Misi <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-[#DCE5F2] bg-white p-8">
          <h2 className="text-2xl font-extrabold text-[#172033]">Nilai-Nilai Kami</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { title: 'Inovasi', desc: 'Berani mencoba, mengembangkan ide, menciptakan solusi.' },
              { title: 'Integritas', desc: 'Jujur, bertanggung jawab, konsisten dalam setiap langkah.' },
              { title: 'Kolaborasi', desc: 'Bekerja tim, saling mendukung, terbuka pada perspektif.' },
              { title: 'Profesionalisme', desc: 'Berkualitas, terukur, siap bersaing di tingkat global.' },
            ].map(v => (
              <div key={v.title} className="rounded-xl border border-[#DCE5F2] p-5 text-center">
                <h3 className="font-bold text-[#172033]">{v.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#64748B]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
