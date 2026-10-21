import { news } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';

export async function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Link href="/berita" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Berita
        </Link>

        <article>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">{article.category}</span>
            <span className="flex items-center gap-1.5 text-sm text-[#64748B]">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-[#64748B]">
              <Tag className="h-4 w-4" />
              {article.author}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-[#172033] md:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg text-[#64748B]">{article.excerpt}</p>

          <img src={article.image} alt={article.title} className="mt-8 h-96 w-full rounded-2xl object-cover" />

          <div className="prose prose-sm mt-8 max-w-none space-y-5 text-[#172033] leading-8">
            {article.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-[#DCE5F2] pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Bagikan</p>
              <button className="mt-2 flex items-center gap-2 rounded-lg border border-[#DCE5F2] bg-white px-4 py-2 text-sm font-semibold text-[#172033] hover:bg-[#F5F8FF]">
                <Share2 className="h-4 w-4" />
                Bagikan berita
              </button>
            </div>
            <Link href="/berita" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
              Berita Lainnya
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
