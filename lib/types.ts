// Hero Slider
export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaUrl: string;
  order: number;
  active: boolean;
}

// Major/Program Keahlian
export interface Major {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide icon name
  color: string; // tailwind color name like 'blue', 'orange', 'green', 'purple'
  description: string;
  longDescription: string;
  skills: string[];
  careers: string[];
  image: string;
}

// News/Berita
export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
}

// Event/Agenda
export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string; // 'Akademik' | 'Kegiatan' | 'Pengembangan' | 'Kompetisi'
  description: string;
}

// Gallery
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
}

// Achievement
export interface Achievement {
  id: string;
  title: string;
  event: string;
  level: string; // 'Kota' | 'Provinsi' | 'Nasional' | 'Internasional'
  year: string;
  students: string[];
  image: string;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// Facility
export interface Facility {
  name: string;
  description: string;
  icon: string;
  image: string;
}

// Teacher/Guru
export interface Teacher {
  id: string;
  name: string;
  nip: string;
  subject: string;
  position: string;
  image: string;
  email: string;
  phone: string;
}

// Student/Siswa
export interface Student {
  id: string;
  nis: string;
  name: string;
  class: string;
  major: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  parentName: string;
  parentPhone: string;
}

// Schedule
export interface ScheduleItem {
  day: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
}

// Assignment/Tugas
export interface Assignment {
  id: string;
  title: string;
  subject: string;
  description: string;
  dueDate: string;
  status: 'belum' | 'dikerjakan' | 'selesai' | 'terlambat';
  type: string;
  attachments?: string[];
}

// Grade/Nilai
export interface Grade {
  subject: string;
  teacher: string;
  tugas: number;
  uts: number;
  uas: number;
  average: number;
  grade: string;
}

// Attendance/Presensi
export interface AttendanceRecord {
  date: string;
  status: 'hadir' | 'izin' | 'sakit' | 'alpha';
  subject: string;
  note?: string;
}

// Announcement/Pengumuman
export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'normal' | 'important' | 'urgent';
  author: string;
}

// PPDB Registration
export interface PPDBRegistration {
  id: string;
  registrationNumber: string;
  name: string;
  previousSchool: string;
  major: string;
  status: 'pending' | 'verified' | 'accepted' | 'rejected';
  date: string;
}

// Class/Kelas
export interface ClassInfo {
  id: string;
  name: string; // e.g. "X RPL 1"
  major: string;
  grade: number; // 10, 11, 12
  homeroom: string; // wali kelas
  studentCount: number;
}

// User for auth demo
export interface DemoUser {
  role: 'siswa' | 'guru' | 'admin';
  name: string;
  email: string;
  avatar: string;
}

// Stats for dashboard
export interface DashboardStats {
  label: string;
  value: string | number;
  change?: string;
  icon: string;
  color: string;
}

// Website settings
export interface WebsiteSettings {
  schoolName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  ppdbOpen: boolean;
  ppdbYear: string;
}
