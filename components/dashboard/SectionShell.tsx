'use client';

import { useState } from 'react';
import { Search, Plus, X, CheckCircle2, AlertCircle } from 'lucide-react';

export function SectionShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          {subtitle && <p className="text-sm text-[#64748B]">{subtitle}</p>}
          <h1 className="mt-1 text-3xl font-extrabold text-[#172033]">{title}</h1>
        </div>
        <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">Data demo / fiktif</span>
      </div>
      {children}
    </div>
  );
}

export function DataTable({ title, headers, rows, onAdd }: { title: string; headers: string[]; rows: Array<Array<string | number>>; onAdd?: string }) {
  const [q, setQ] = useState('');
  const filtered = q ? rows.filter(r => r.some(c => String(c).toLowerCase().includes(q.toLowerCase()))) : rows;

  return (
    <div className="rounded-2xl border border-[#DCE5F2] bg-white p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-[#172033]">{title}</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#94A3B8]" />
            <input className="rounded-lg border border-[#DCE5F2] py-2 pl-9 pr-3 text-sm" placeholder="Cari..." value={q} onChange={e => setQ(e.target.value)} />
          </div>
          {onAdd && <DemoAddButton label={onAdd} />}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead>
            <tr className="border-b border-[#DCE5F2] text-xs uppercase tracking-wide text-[#94A3B8]">
              {headers.map(h => <th key={h} className="px-3 py-3 font-bold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {filtered.length ? filtered.map((row, i) => (
              <tr key={i} className="border-b border-[#DCE5F2]/70 last:border-0 hover:bg-[#F5F8FF]">
                {row.map((cell, j) => <td key={j} className="px-3 py-3 text-[#172033]">{cell}</td>)}
              </tr>
            )) : (
              <tr><td colSpan={headers.length} className="px-3 py-12 text-center text-[#64748B]">
                {q ? 'Tidak ada hasil pencarian.' : 'Belum ada data demo.'}
              </td></tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-[#94A3B8]">Semua data bersifat fiktif dan tidak tersimpan permanen.</p>
    </div>
  );
}

export function DemoAddButton({ label }: { label: string }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)} className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
        <Plus className="h-4 w-4" /> {label}
      </button>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#172033]">{label}</h3>
              <button onClick={() => setShow(false)} className="rounded-lg p-1 hover:bg-slate-100"><X className="h-5 w-5 text-[#64748B]" /></button>
            </div>
            <DemoForm onDone={() => setShow(false)} />
          </div>
        </div>
      )}
    </>
  );
}

function DemoForm({ onDone }: { onDone: () => void }) {
  const [done, setDone] = useState(false);
  if (done) return (
    <div className="text-center py-6">
      <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
      <p className="font-bold text-[#172033]">Berhasil (Simulasi)</p>
      <p className="mt-1 text-xs text-[#64748B]">Data tidak tersimpan permanen.</p>
      <button onClick={onDone} className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white">Tutup</button>
    </div>
  );
  return (
    <div className="space-y-3">
      <p className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800 flex items-start gap-2">
        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
        Formulir simulasi — data tidak akan disimpan.
      </p>
      <input className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" placeholder="Judul / Nama" />
      <textarea className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" rows={3} placeholder="Deskripsi / Keterangan" />
      <button onClick={() => setDone(true)} className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Simpan (Demo)</button>
    </div>
  );
}

export function EmptySection({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-2xl border border-[#DCE5F2] bg-white p-12 text-center">
      <AlertCircle className="mx-auto h-12 w-12 text-blue-300" />
      <h2 className="mt-4 text-xl font-bold text-[#172033]">{title}</h2>
      <p className="mt-2 text-sm text-[#64748B]">{description || 'Halaman demo — konten siap dikembangkan.'}</p>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    selesai: 'bg-green-100 text-green-700',
    'belum dikerjakan': 'bg-red-100 text-red-700',
    'sedang dikerjakan': 'bg-amber-100 text-amber-700',
    hadir: 'bg-green-100 text-green-700',
    sakit: 'bg-yellow-100 text-yellow-700',
    izin: 'bg-blue-100 text-blue-700',
    alpha: 'bg-red-100 text-red-700',
    diterima: 'bg-green-100 text-green-700',
    menunggu: 'bg-amber-100 text-amber-700',
    ditolak: 'bg-red-100 text-red-700',
    terlambat: 'bg-orange-100 text-orange-700',
  };
  const c = colors[status.toLowerCase()] || 'bg-slate-100 text-slate-700';
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${c}`}>{status}</span>;
}
