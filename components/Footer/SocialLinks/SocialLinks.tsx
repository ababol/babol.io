import { GithubIcon } from '@/icons/GithubIcon';
import { LinkedInIcon } from '@/icons/LinkedInIcon';
import { MediumIcon } from '@/icons/MediumIcon';
import { TwitterIcon } from '@/icons/TwitterIcon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import SocialLinksCss from './SocialLinks.module.css';

const socialsList = [
  {
    icon: <MediumIcon />,
    href: 'https://medium.com/@ababol'
  },
  {
    icon: <GithubIcon />,
    href: 'https://github.com/ababol'
  },
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/arbabol'
  },
  {
    icon: <LinkedInIcon />,
    href: 'https://linkedin.com/in/ababol'
  }
];

export const SocialLinks = () => (
  <div className="flex flex-row space-x-2">
    {socialsList.map(({ icon, href }) => (
      <Link
        className={cn(
          SocialLinksCss['SocialLinks'],
          'flex h-[32px] w-[32px] items-center justify-center rounded-full border-[1px] border-solid border-black p-2 opacity-80',
          'hover:bg-primary focus:bg-primary hover:border-primary focus:border-primary'
        )}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </Link>
    ))}
  </div>
);
