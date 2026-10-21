import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = { title: 'Alur & Persyaratan PPDB' };

export default function PPDBAlurPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Link href="/ppdb-info" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Informasi PPDB
        </Link>

        <h1 className="text-4xl font-extrabold text-[#172033]">Alur & Persyaratan Pendaftaran</h1>
        <p className="mt-4 text-lg text-[#64748B]">Panduan lengkap untuk mendaftar di SMK Negara Angin.</p>

        <div className="mt-12 space-y-10">
          {[
            {
              phase: 'Gelombang 1',
              period: '1 - 30 Mei 2024',
              steps: [
                { title: 'Pendaftaran Online', desc: 'Isi formulir di portal PPDB dengan data lengkap.' },
                { title: 'Unggah Dokumen', desc: 'Upload ijazah, KK, foto, dan dokumen pendukung lainnya.' },
                { title: 'Verifikasi', desc: 'Tim panitia memverifikasi kelengkapan dan keabsahan data.' },
                { title: 'Pengumuman', desc: 'Cek hasil seleksi di portal PPDB.' },
                { title: 'Daftar Ulang', desc: 'Lakukan daftar ulang sesuai jadwal yang ditentukan.' },
              ],
            },
            {
              phase: 'Gelombang 2',
              period: '1 - 25 Juli 2024',
              steps: [
                { title: 'Pendaftaran Online', desc: 'Tersedia jika kuota gelombang 1 belum terpenuhi.' },
                { title: 'Proses Seleksi', desc: 'Seleksi berdasarkan nilai rapor dan prestasi.' },
                { title: 'Pengumuman', desc: 'Pengumuman hasil seleksi gelombang 2.' },
              ],
            },
          ].map(g => (
            <div key={g.phase} className="rounded-2xl border border-[#DCE5F2] bg-white p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-[#172033]">{g.phase}</h2>
                <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">{g.period}</span>
              </div>
              <ul className="space-y-4">
                {g.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-[#172033]">{step.title}</h3>
                      <p className="mt-0.5 text-sm text-[#64748B]">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-8">
          <h2 className="text-xl font-extrabold text-[#172033]">Dokumen yang Diperlukan</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ul className="space-y-3">
              {['Ijazah SMP/MTs atau surat keterangan lulus', 'SKHUN (jika ada)', 'Kartu Keluarga', 'Akta Kelahiran'].map(d => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
                  <span className="text-sm text-[#172033]">{d}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {['Pas foto 3x4 (background merah)', 'Surat keterangan sehat', 'Surat keterangan berkelakuan baik', 'Dokumen prestasi (jika ada)'].map(d => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
                  <span className="text-sm text-[#172033]">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-3">
          <Link href="/ppdb/daftar" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Mulai Pendaftaran
          </Link>
          <Link href="/ppdb/status" className="rounded-lg border border-[#DCE5F2] bg-white px-6 py-3 font-semibold text-[#172033] hover:bg-[#F5F8FF]">
            Cek Status
          </Link>
        </div>
      </div>
    </main>
  );
}
