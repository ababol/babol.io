'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks/SocialLinks';

export const Footer = () => (
  <footer className="flex items-center justify-between pb-16 pt-32">
    <a
      className={cn(
        'cursor-pointer text-3xl font-medium text-black',
        'transition-transform[0.1s] transition-color[0.1s]',
        'hover:text-primary hover:-translate-y-1',
        'focus:text-primary focus:-translate-y-1'
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Up
    </a>
    <div className="ml-auto flex items-center">
      <Link
        className="hover:text-primary mr-5 font-extralight text-black"
        href="mailto:a@babol.io"
      >
        a@babol.io
      </Link>
      <SocialLinks />
    </div>
  </footer>
);
