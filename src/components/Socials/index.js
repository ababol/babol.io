import React from 'react';
import LinkedIn from '../../icons/linkedin.svg?sprite';
import Twitter from '../../icons/twitter.svg?sprite';
import Github from '../../icons/github.svg?sprite';
import Medium from '../../icons/medium.svg?sprite';

const socialsList = [
  {
    icon: Medium,
    href: 'https://medium.com/@ababol',
  },
  {
    icon: Github,
    href: 'https://github.com/ababol',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/arbabol',
  },
  {
    icon: LinkedIn,
    href: 'https://linkedin.com/in/ababol',
  },
];

export default () => (
  <ul className="Socials">
    {socialsList.map(({ icon, href }) => (
      <li className="Socials__item" key={href}>
        <a href={href} target="_blank" rel="noopener">
          {icon({ className: 'Socials__items-icon Icon Icon--small' })}
        </a>
      </li>
    ))}
  </ul>
);
