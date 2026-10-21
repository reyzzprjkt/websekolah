import { events } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

export const metadata = { title: 'Agenda Sekolah' };

export default function AgendaPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-blue-600">Beranda</Link><span>/</span><span className="font-semibold text-[#172033]">Agenda</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#172033] md:text-5xl">Agenda Kegiatan</h1>
          <p className="mt-4 text-lg text-[#64748B]">Jadwal kegiatan dan event penting di SMK Negara Angin.</p>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex gap-6 overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <span className="text-2xl font-extrabold">{event.date.split(' ')[0]}</span>
                <span className="text-xs font-bold uppercase">{event.date.split(' ')[1]}</span>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">{event.type}</span>
                </div>
                <h2 className="text-lg font-bold text-[#172033]">{event.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{event.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#DCE5F2] bg-[#F5F8FF] p-10 text-center">
          <h2 className="text-2xl font-extrabold text-[#172033]">Ingin Tahu Lebih Banyak?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#64748B]">Ikuti akun media sosial kami untuk update agenda terbaru dan kegiatan menarik lainnya.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Ikuti Kami</button>
          </div>
        </div>
      </div>
    </main>
  );
}
