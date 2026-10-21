import { schoolHistory } from '@/lib/data';
import Link from 'next/link';

export const metadata = { title: 'Sejarah Sekolah' };

export default function SejarahPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Sejarah</span>
        </nav>
        
        <article className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-[#172033]">Sejarah SMK Negara Angin</h1>
            <p className="mt-4 text-lg text-[#64748B]">Perjalanan pendidikan vokasi yang dimulai dari visi sederhana menjadi institusi terpercaya.</p>
          </div>

          <img src="https://images.unsplash.com/photo-1427504494785-cdfc993f6664?w=900&q=85" alt="Sejarah SMK Negara Angin" className="h-96 w-full rounded-2xl object-cover" />

          <div className="prose prose-sm max-w-none space-y-5 text-[#64748B]">
            {schoolHistory.split('\n\n').map((p, i) => (
              <p key={i} className="leading-8">{p}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-8">
            <h3 className="font-bold text-[#172033]">Timeline Penting</h3>
            <div className="mt-6 space-y-6">
              {[
                { year: '2010', event: 'Pendirian SMK Negara Angin dengan 1 program keahlian.' },
                { year: '2013', event: 'Penambahan program keahlian menjadi 2 jurusan.' },
                { year: '2018', event: 'Akreditasi A dari BAN-SM.' },
                { year: '2022', event: 'Perluasan ke 4 program keahlian dengan fasilitas modern.' },
                { year: '2024', event: 'Pencapaian 1.240+ siswa dan sertifikasi internasional.' },
              ].map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex min-w-fit items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-blue-600" />
                    <span className="font-bold text-blue-600 min-w-[60px]">{item.year}</span>
                  </div>
                  <p className="pt-0.5 text-sm">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-8">
            <Link href="/visi-misi" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Visi & Misi
            </Link>
            <Link href="/profil" className="rounded-lg border border-[#DCE5F2] px-6 py-3 font-semibold text-[#172033] hover:bg-[#F5F8FF]">
              Kembali ke Profil
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
