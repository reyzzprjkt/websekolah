import { majors } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'Program Keahlian' };

export default function ProgramKeahlianPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Program Keahlian</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Program Keahlian</h1>
          <p className="mt-4 text-lg text-[#64748B]">Temukan bidang yang sesuai dengan minat dan bakat kamu. Semua jurusan dirancang untuk membekali keterampilan yang relevan dengan industri.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {majors.map((major, i) => {
            const colors = [
              { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-600' },
              { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-600' },
              { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-600' },
              { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-600' },
            ][i];
            
            return (
              <Link
                key={major.slug}
                href={`/program-keahlian/${major.slug}`}
                className={`group block overflow-hidden rounded-2xl border ${colors.border} ${colors.bg} transition hover:shadow-xl`}
              >
                <img src={major.image} alt={major.name} className="h-56 w-full object-cover" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-block rounded-md px-2 py-1 text-xs font-bold ${colors.badge} text-white`}>{major.shortName}</span>
                      <h2 className={`mt-3 text-2xl font-extrabold ${colors.text}`}>{major.name}</h2>
                      <p className="mt-3 text-sm leading-6 text-[#64748B]">{major.longDescription}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Keterampilan yang Dipelajari</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {major.skills.slice(0, 4).map(skill => (
                          <span key={skill} className="rounded-lg border border-[#DCE5F2] bg-white px-3 py-1.5 text-xs font-medium text-[#172033]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 pt-2 font-bold ${colors.text} group-hover:gap-3 transition-all`}>
                      Pelajari lebih lanjut <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-[#DCE5F2] bg-white p-10 text-center">
          <h2 className="text-2xl font-extrabold text-[#172033]">Masih Bingung Pilih Jurusan?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#64748B]">
            Tim kami siap membantu kamu menemukan program keahlian yang paling sesuai dengan minat dan rencana karir masa depan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Hubungi Kami
            </Link>
            <Link href="/ppdb/daftar" className="rounded-lg border border-[#DCE5F2] px-6 py-3 font-semibold text-[#172033] hover:bg-[#F5F8FF]">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
