import React from 'react';
import LinkedIn from '../../icons/linkedin.svg';
import Twitter from '../../icons/twitter.svg';
import Github from '../../icons/github.svg';
import Medium from '../../icons/medium.svg';

const socialsList = [
  {
    icon: Medium,
    href: 'https://medium.com/@ababol',
    width: 18,
  },
  {
    icon: Github,
    href: 'https://github.com/ababol',
    width: 17,
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/arbabol',
    width: 15,
  },
  {
    icon: LinkedIn,
    href: 'https://linkedin.com/in/ababol',
    width: 14,
  },
];

export default () => (
  <ul className="Socials">
    {socialsList.map(({ icon, href, width }) => (
      <li className="Socials__item" key={href}>
        <a href={href} target="_blank" rel="noopener">
          {icon({ className: 'Socials__items-icon Icon', width })}
        </a>
      </li>
    ))}
  </ul>
);
