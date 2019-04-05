import React from 'react';

export default () => (
  <nav className="Nav container">
    <a
      href="/static/assets/arnaud_babol.pdf"
      className="Text__link"
      target="_blank"
      remote="noopener"
      onMouseEnter={() => {
        document.title = `🚀 ${document.title}`;
      }}
      onMouseLeave={() => {
        document.title = document.title.replace('🚀 ', '');
      }}
    >
      Download CV
    </a>
  </nav>
);
