'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

export const Footer = () => (
  <footer className="flex items-center justify-between pb-16 pt-32">
    <div
      className={cn(
        'cursor-pointer text-3xl font-medium text-black',
        'transition-transform duration-100 ease-in-out',
        'hover:-translate-y-1 hover:text-primary',
        'focus:-translate-y-1 focus:text-primary'
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Up
    </div>
    <div className="ml-auto flex items-center">
      <Link
        className="mr-5 font-extralight text-black hover:text-primary focus:text-primary"
        href="mailto:a@babol.io"
      >
        a@babol.io
      </Link>
      <SocialLinks />
    </div>
  </footer>
);
