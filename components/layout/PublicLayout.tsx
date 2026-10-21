'use client';

import React from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import PublicFooter from '@/components/layout/PublicFooter';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <main className="flex-1 pt-20 pb-16">{children}</main>
      <PublicFooter />
    </div>
  );
}
