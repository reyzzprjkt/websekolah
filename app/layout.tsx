import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import { HeroSlideProvider } from "@/components/hero/HeroSlideStore";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SMK Negara Angin — Belajar, Berkarya, Siap Mendunia",
    template: "%s | SMK Negara Angin",
  },
  description: "Sekolah vokasi modern untuk generasi yang siap berkarya dan mendunia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-white text-[#172033]">
        <ToastProvider><HeroSlideProvider>{children}</HeroSlideProvider></ToastProvider>
      </body>
    </html>
  );
}
