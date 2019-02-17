import React from 'react';

export default () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-36930870-1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-36930870-1');
      `,
      }}
    />
  </>
);
