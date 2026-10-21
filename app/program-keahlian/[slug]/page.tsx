import { majors } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Briefcase } from 'lucide-react';

export async function generateStaticParams() {
  return majors.map((major) => ({ slug: major.slug }));
}

export default async function ProgramKeahlianDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const major = majors.find((m) => m.slug === slug);
  if (!major) notFound();

  const colors = {
    'rekayasa-perangkat-lunak': { bg: 'bg-blue-50', accent: 'bg-blue-600', text: 'text-blue-700' },
    'desain-komunikasi-visual': { bg: 'bg-orange-50', accent: 'bg-orange-600', text: 'text-orange-700' },
    'teknik-jaringan-komputer': { bg: 'bg-emerald-50', accent: 'bg-emerald-600', text: 'text-emerald-700' },
    'bisnis-digital': { bg: 'bg-violet-50', accent: 'bg-violet-600', text: 'text-violet-700' },
  }[slug] || { bg: 'bg-blue-50', accent: 'bg-blue-600', text: 'text-blue-700' };

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Link href="/program-keahlian" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Program Keahlian
        </Link>

        <div className={`overflow-hidden rounded-2xl border border-[#DCE5F2] ${colors.bg}`}>
          <img src={major.image} alt={major.name} className="h-80 w-full object-cover" />
          <div className="p-10">
            <span className={`inline-block rounded-md px-3 py-1.5 text-sm font-bold text-white ${colors.accent}`}>{major.shortName}</span>
            <h1 className={`mt-4 text-4xl font-extrabold ${colors.text}`}>{major.name}</h1>
            <p className="mt-4 text-lg leading-8 text-[#64748B]">{major.longDescription}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-8">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className={`h-6 w-6 ${colors.text}`} />
              <h2 className="text-xl font-extrabold text-[#172033]">Keterampilan yang Dipelajari</h2>
            </div>
            <ul className="space-y-3">
              {major.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${colors.accent}`} />
                  <span className="text-sm text-[#172033]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-8">
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className={`h-6 w-6 ${colors.text}`} />
              <h2 className="text-xl font-extrabold text-[#172033]">Prospek Karir</h2>
            </div>
            <ul className="space-y-3">
              {major.careers.map((career) => (
                <li key={career} className="flex items-start gap-3">
                  <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${colors.accent}`} />
                  <span className="text-sm text-[#172033]">{career}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-10 text-center">
          <h2 className="text-2xl font-extrabold text-[#172033]">Tertarik dengan {major.shortName}?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#64748B]">
            Daftar sekarang dan mulai perjalanan pendidikan vokasi kamu di SMK Negara Angin. Semua data adalah simulasi demo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/ppdb/daftar" className={`rounded-lg px-6 py-3 font-semibold text-white ${colors.accent} hover:opacity-90`}>
              Daftar Sekarang
            </Link>
            <Link href="/kontak" className="rounded-lg border border-[#DCE5F2] bg-white px-6 py-3 font-semibold text-[#172033] hover:bg-gray-50">
              Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
