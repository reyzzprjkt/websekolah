import Link from 'next/link';
import { Calendar, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

export const metadata = { title: 'Informasi PPDB' };

export default function PPDBInfoPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">PPDB</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Informasi PPDB</h1>
          <p className="mt-4 text-lg text-[#64748B]">Penerimaan Peserta Didik Baru Tahun Ajaran 2024/2025. Jalur, persyaratan, dan alur pendaftaran.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-[#172033]">
              <Calendar className="h-7 w-7 text-blue-600" />
              Kalender PPDB
            </h2>
            <ul className="space-y-4">
              {[
                { label: 'Pendaftaran Gelombang 1', date: '01 - 30 Mei 2024' },
                { label: 'Pengumuman Seleksi Gel. 1', date: '10 Juni 2024' },
                { label: 'Daftar Ulang Gel. 1', date: '11 - 20 Juni 2024' },
                { label: 'Pendaftaran Gelombang 2', date: '01 - 25 Juli 2024' },
                { label: 'Pengumuman Seleksi Gel. 2', date: '30 Juli 2024' },
                { label: 'Masa Orientasi Siswa', date: '15 Agustus 2024' },
              ].map(item => (
                <li key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#172033]">{item.label}</p>
                    <p className="text-sm text-[#64748B]">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#DCE5F2] bg-white p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-[#172033]">
              <FileText className="h-7 w-7 text-blue-600" />
              Persyaratan Umum
            </h2>
            <ul className="space-y-3">
              {[
                'Lulusan SMP/MTs/sederajat',
                'Umur maksimal 21 tahun pada tanggal 1 Juli 2024',
                'Membayar biaya pendaftaran',
                'Melampirkan fotokopi ijazah & SKHUN',
                'Pas foto 3x4 (2 lembar)',
                'Fotokopi kartu keluarga',
                'Mengisi formulir pendaftaran',
              ].map(s => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="text-sm text-[#64748B]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[#DCE5F2] bg-white p-10">
          <h2 className="text-2xl font-extrabold text-[#172033]">Alur Pendaftaran</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {[
              { step: 1, title: 'Daftar Akun', desc: 'Buat akun di portal PPDB.' },
              { step: 2, title: 'Isi Formulir', desc: 'Lengkapi data pribadi & pilih jurusan.' },
              { step: 3, title: 'Unggah Dokumen', desc: 'Upload persyaratan yang diminta.' },
              { step: 4, title: 'Verifikasi', desc: 'Tim kami akan memverifikasi data kamu.' },
            ].map(s => (
              <div key={s.step} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">{s.step}</div>
                <h3 className="mt-4 font-bold text-[#172033]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#64748B]">{s.desc}</p>
                {s.step < 4 && <div className="absolute top-6 left-1/2 h-0.5 w-full bg-blue-200 md:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl bg-blue-600 p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold">Siap Mendaftar?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">Bergabunglah dengan kami sekarang dan mulailah perjalanan pendidikan vokasi yang relevan dengan industri.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/ppdb/daftar" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-blue-700 hover:bg-blue-50">
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ppdb/alur" className="rounded-lg border border-white/40 px-6 py-3.5 font-bold text-white hover:bg-white/10">
              Lihat Alur Lengkap
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
