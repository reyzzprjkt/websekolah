import { vision, mission as missions } from '@/lib/data';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = { title: 'Visi & Misi' };

export default function VisiMisiPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Visi & Misi</span>
        </nav>

        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-[#172033]">Visi & Misi SMK Negara Angin</h1>
          <p className="mt-4 text-lg text-[#64748B]">Komitmen kami dalam mencetak generasi yang kompeten, berkarakter, dan siap bersaing global.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#DCE5F2] bg-blue-50 p-10">
            <h2 className="text-2xl font-extrabold text-blue-700">Visi</h2>
            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold leading-8 text-[#172033]">{vision}</p>
            </div>
            <p className="mt-5 text-sm text-[#64748B]">Visi kami berfokus pada penciptaan lulusan yang tidak hanya kompeten secara teknis, tetapi juga memiliki soft skills dan karakter yang kuat.</p>
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-emerald-50 p-10">
            <h2 className="text-2xl font-extrabold text-emerald-700">Misi</h2>
            <div className="mt-6 space-y-3">
              {missions.map((misi, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                  <p className="text-sm leading-6 text-[#172033]">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-[#DCE5F2] bg-white p-8">
          <h2 className="text-2xl font-extrabold text-[#172033]">Tujuan Strategis</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Kualitas Akademik', desc: 'Standar pembelajaran tinggi dengan kurikulum industri terkini.' },
              { title: 'Kompetensi Praktis', desc: 'Fasilitas workshop modern dan hands-on learning experience.' },
              { title: 'Pengembangan Karir', desc: 'Kerja sama industri dan placement program untuk lulusan.' },
            ].map(t => (
              <div key={t.title} className="rounded-xl border border-[#DCE5F2] p-6 text-center">
                <h3 className="font-bold text-[#172033]">{t.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex gap-3">
          <Link href="/profil" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Profil Sekolah
          </Link>
          <Link href="/program-keahlian" className="rounded-lg border border-[#DCE5F2] px-6 py-3 font-semibold text-[#172033] hover:bg-[#F5F8FF]">
            Program Keahlian
          </Link>
        </div>
      </div>
    </main>
  );
}
