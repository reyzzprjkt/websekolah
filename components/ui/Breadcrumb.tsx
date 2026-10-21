import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav className="flex items-center gap-1 text-sm">
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
        {item.href ? (
          <Link href={item.href} className="text-gray-500 hover:text-blue-600 transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-gray-900 font-medium">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumb;
