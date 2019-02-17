import React from 'react';

export default () => (
  <header className="Header header container">
    <div className="p-vertical-100">
      <span className="Text--light">👋 I am Arnaud,</span>
      <br />
      <h1 className="Text">
        a Growth Engineer working{' '}
        <a
          className="Text__link"
          href="https://shine.fr"
          rel="noopener"
          target="_blank"
        >
          @Shine
        </a>
      </h1>
      <div className="Text--light m-vertical-20">
        I am sharing design studies on{' '}
        <a
          className="Text__link"
          href="https://medium.com/@ababol"
          target="_blank"
          rel="noopener"
        >
          Medium
        </a>{' '}
        and code on{' '}
        <a
          className="Text__link"
          href="https://github.com/ababol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
        <div className="m-top-5">
          You can contact me on{' '}
          <a className="Text__link" href="mailto:a@babol.io">
            a@babol.io
          </a>
          .
        </div>
      </div>
    </div>
  </header>
);
