import React from 'react';
import jump from 'jump.js';
import Socials from '../Socials';

const Footer = () => (
  <footer className="Footer container m-bottom-50">
    <a
      className="Footer__up Title"
      onClick={e => {
        e.preventDefault();
        jump('body', {
          duration: 300,
        });
      }}
    >
      Up
    </a>
    <div className="Footer__right">
      <a className="Text--black m-right-20" href="mailto:a@babol.io">
        a@babol.io
      </a>
      <Socials />
    </div>
  </footer>
);

export default Footer;
