import React from 'react';

export default () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @font-face {
      font-display: fallback;
      font-family: "Sailec";
      src: url("/static/fonts/Sailec-Light.eot");
      src: url("/static/fonts/Sailec-Light.eot?#iefix") format("embedded-opentype"), url("/static/fonts/Sailec-Light.woff2") format("woff2"), url("/static/fonts/Sailec-Light.woff") format("woff"), url("/static/fonts/Sailec-Light.ttf") format("truetype");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-display: fallback;
      font-family: "Sailec";
      src: url("/static/fonts/Sailec.eot");
      src: url("/static/fonts/Sailec.eot?#iefix") format("embedded-opentype"), url("/static/fonts/Sailec.woff2") format("woff2"), url("/static/fonts/Sailec.woff") format("woff"), url("/static/fonts/Sailec.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-display: fallback;
      font-family: "Sailec";
      src: url("/static/fonts/Sailec-Medium.eot");
      src: url("/static/fonts/Sailec-Medium.eot?#iefix") format("embedded-opentype"), url("/static/fonts/Sailec-Medium.woff2") format("woff2"), url("/static/fonts/Sailec-Medium.woff") format("woff"), url("/static/fonts/Sailec-Medium.ttf") format("truetype");
      font-weight: 500;
      font-style: normal;
    }
    body {
      font-family: 'Sailec', Helvetica, Arial, sans-serif;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `,
    }}
  />
);
