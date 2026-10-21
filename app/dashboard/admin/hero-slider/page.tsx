'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { SectionShell } from '@/components/dashboard/SectionShell';
import { useHeroSlideStore } from '@/components/hero/HeroSlideStore';
import type { HeroSlide } from '@/lib/types';
import { useState } from 'react';
import { ArrowUp, ArrowDown, Eye, EyeOff, Pencil, Plus, Trash2, X, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function AdminHeroSliderPage() {
  const { slides, addSlide, updateSlide, deleteSlide, toggleSlide, moveSlide } = useHeroSlideStore();
  const [editing, setEditing] = useState<HeroSlide | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [preview, setPreview] = useState<HeroSlide | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const moveUp = (index: number) => {
    if (index === 0) return;
    moveSlide(slides[index].id, 'up');
  };

  const moveDown = (index: number) => {
    if (index >= slides.length - 1) return;
    moveSlide(slides[index].id, 'down');
  };

  const openNew = () => {
    setIsNew(true);
    setEditing({
      id: `slide-${Date.now()}`,
      title: '',
      description: '',
      image: '',
      ctaText: '',
      ctaUrl: '',
      order: slides.length + 1,
      active: true,
    });
  };

  const openEdit = (slide: HeroSlide) => {
    setIsNew(false);
    setEditing({ ...slide });
  };

  const saveSlide = () => {
    if (!editing) return;
    if (!editing.title.trim() || !editing.image.trim()) return;
    if (isNew) {
      addSlide(editing);
    } else {
      updateSlide(editing);
    }
    setEditing(null);
    showToast(isNew ? 'Slide ditambahkan' : 'Slide diperbarui');
  };

  const sorted = [...slides].sort((a, b) => a.order - b.order);

  return (
    <DashboardLayout role="admin">
      <SectionShell title="Hero Slider" subtitle="Admin Sekolah">
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">CMS Frontend Simulasi</p>
            <p className="text-xs text-amber-700 mt-1">Perubahan tersimpan di localStorage selama sesi browser. Reload mempertahankan data. Tidak ada backend atau autentikasi nyata.</p>
          </div>
        </div>

        <div className="mb-5 flex justify-end">
          <button onClick={openNew} className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" /> Tambah Slide
          </button>
        </div>

        <div className="space-y-4">
          {sorted.map((slide, index) => (
            <div key={slide.id} className={`rounded-2xl border bg-white p-4 transition-colors ${slide.active ? 'border-[#DCE5F2]' : 'border-red-200 bg-red-50/30'}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-xl border border-[#DCE5F2]">
                  {slide.image ? (
                    <img src={slide.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#F5F8FF] text-xs text-[#94A3B8]">No image</div>
                  )}
                  <span className={`absolute top-1 right-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${slide.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {slide.active ? 'Aktif' : 'Nonaktif'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-[#F5F8FF] px-2 py-0.5 text-xs font-bold text-blue-600">#{slide.order}</span>
                    <h3 className="font-bold text-[#172033] truncate">{slide.title || '(tanpa judul)'}</h3>
                  </div>
                  <p className="mt-1 text-sm text-[#64748B] line-clamp-1">{slide.description}</p>
                  <p className="mt-1 text-xs text-[#94A3B8]">CTA: {slide.ctaText} → {slide.ctaUrl}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => moveUp(index)} disabled={index === 0} className="rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF] disabled:opacity-30" aria-label="Naikkan urutan">
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button onClick={() => moveDown(index)} disabled={index === sorted.length - 1} className="rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF] disabled:opacity-30" aria-label="Turunkan urutan">
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button onClick={() => setPreview(slide)} className="rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF]" aria-label="Preview slide">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button onClick={() => { toggleSlide(slide.id); showToast(slide.active ? 'Slide dinonaktifkan' : 'Slide diaktifkan'); }} className="rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF]" aria-label={slide.active ? 'Nonaktifkan' : 'Aktifkan'}>
                    {slide.active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4 text-green-600" />}
                  </button>
                  <button onClick={() => openEdit(slide)} className="rounded-lg p-2 text-[#64748B] hover:bg-[#F5F8FF]" aria-label="Edit slide">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => { deleteSlide(slide.id); showToast('Slide dihapus'); }} className="rounded-lg p-2 text-red-500 hover:bg-red-50" aria-label="Hapus slide">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {sorted.length === 0 && (
            <div className="rounded-2xl border border-[#DCE5F2] bg-white p-12 text-center">
              <p className="text-[#64748B]">Belum ada slide. Klik &quot;Tambah Slide&quot; untuk memulai.</p>
            </div>
          )}
        </div>

        {editing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/40 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-[#172033]">{isNew ? 'Tambah Slide' : 'Edit Slide'}</h3>
                <button onClick={() => setEditing(null)} className="rounded-lg p-1 hover:bg-slate-100"><X className="h-5 w-5 text-[#64748B]" /></button>
              </div>
              <div className="space-y-4">
                <Field label="Judul *" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} placeholder="Judul slide" />
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">Deskripsi</label>
                  <textarea className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" rows={3} value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} placeholder="Deskripsi singkat slide" />
                </div>
                <Field label="URL Gambar *" value={editing.image} onChange={v => setEditing({ ...editing, image: v })} placeholder="https://images.unsplash.com/..." />
                {editing.image && (
                  <div className="overflow-hidden rounded-xl border border-[#DCE5F2]">
                    <img src={editing.image} alt="Preview" className="h-32 w-full object-cover" />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Teks CTA" value={editing.ctaText} onChange={v => setEditing({ ...editing, ctaText: v })} placeholder="Daftar Sekarang" />
                  <Field label="URL CTA" value={editing.ctaUrl} onChange={v => setEditing({ ...editing, ctaUrl: v })} placeholder="/ppdb/daftar" />
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#DCE5F2] p-3">
                  <span className="text-sm font-semibold text-[#172033]">Status Aktif</span>
                  <button
                    type="button"
                    onClick={() => setEditing({ ...editing, active: !editing.active })}
                    className={`relative h-7 w-12 rounded-full transition-colors ${editing.active ? 'bg-blue-600' : 'bg-slate-200'}`}
                    role="switch"
                    aria-checked={editing.active}
                    aria-label="Status aktif"
                  >
                    <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${editing.active ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                {(!editing.title.trim() || !editing.image.trim()) && (
                  <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> Judul dan URL gambar wajib diisi.</p>
                )}
                <button
                  onClick={saveSlide}
                  disabled={!editing.title.trim() || !editing.image.trim()}
                  className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isNew ? 'Tambah Slide' : 'Simpan Slide'}
                </button>
              </div>
            </div>
          </div>
        )}

        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/40 p-4">
            <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">
              <div className="relative h-64 sm:h-80">
                <img src={preview.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F8FF]/92 via-[#F5F8FF]/80 to-[#F5F8FF]/50" />
                <div className="absolute inset-0 flex items-center px-8">
                  <div className="max-w-md">
                    <h2 className="text-2xl font-extrabold text-[#172033] sm:text-3xl">{preview.title}</h2>
                    <p className="mt-3 text-sm text-[#64748B] leading-relaxed">{preview.description}</p>
                    {preview.ctaText && (
                      <span className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white">
                        {preview.ctaText} <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#DCE5F2] p-4">
                <p className="text-xs text-[#94A3B8]">Preview — tampilan homepage akan langsung update</p>
                <button onClick={() => setPreview(null)} className="rounded-lg bg-[#F5F8FF] px-4 py-2 text-sm font-semibold text-[#172033] hover:bg-blue-50">Tutup</button>
              </div>
            </div>
          </div>
        )}

        {toast && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-[#172033] px-5 py-3 text-sm font-semibold text-white shadow-xl">
            <CheckCircle2 className="h-4 w-4 text-green-400" /> {toast}
          </div>
        )}
      </SectionShell>
    </DashboardLayout>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold text-[#172033] mb-1">{label}</label>
      <input className="w-full rounded-lg border border-[#DCE5F2] px-3.5 py-2.5 text-sm" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}
