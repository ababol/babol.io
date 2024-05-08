import { ClapIcon } from '@/icons/ClapIcon';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import blogPostItemCss from './BlogPostItem.module.css';

export const BlogPostItem = ({
  mediumUrl,
  title,
  description,
  clapCount,
  coverUrl
}: {
  mediumUrl: string;
  title: string;
  description: string;
  clapCount: string;
  coverUrl: string;
}) => (
  <li
    className={cn(
      blogPostItemCss['BlogPostItem'],
      'flex cursor-pointer flex-col overflow-hidden rounded-xl'
    )}
  >
    <Link href={mediumUrl} rel="noopener noreferrer" target="_blank">
      <article className="space-y-5">
        <Image
          src={coverUrl}
          width={490}
          height={249}
          alt={title}
          className="w-full"
          style={{ aspectRatio: '236 / 116' }}
          quality={90}
        />
        <header className="px-8">
          <h2 className="text-2xl font-medium">{title}</h2>
        </header>
        <p className="px-8">{description}</p>
        <footer className="flex items-center justify-between px-8 pb-8">
          <div className="flex items-center space-x-0.5 text-sm">
            <ClapIcon />
            <span className="text-secondary">{clapCount}</span>
          </div>
          <div className="text-primary">See more</div>
        </footer>
      </article>
    </Link>
  </li>
);
