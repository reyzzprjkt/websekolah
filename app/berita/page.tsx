import { news } from '@/lib/data';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

export const metadata = { title: 'Berita Sekolah' };

export default function BeritaPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Berita</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Berita & Kegiatan</h1>
          <p className="mt-4 text-lg text-[#64748B]">Update terbaru tentang prestasi, kegiatan, dan perkembangan SMK Negara Angin.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link
              key={item.slug}
              href={`/berita/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">{item.category}</span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" />
                    {item.author}
                  </span>
                </div>
                <h2 className="font-bold leading-6 text-[#172033] line-clamp-2">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#64748B] line-clamp-3">{item.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-blue-600">Baca selengkapnya →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
