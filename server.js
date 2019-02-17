const express = require('express');
const next = require('next');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all(/.*/, (req, res, expressNext) => {
    const host = req.header('host');
    if (host.indexOf('babol.me') > -1) {
      return res.redirect(301, `https://babol.io${req.url}`);
    }

    return expressNext();
  });

  server.get('/favicon.ico', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'static/images/favicons/favicon.ico')),
  );
  server.get('/service-worker.js', (req, res) =>
    res.sendFile(path.resolve(__dirname, '.next/service-worker.js')),
  );
  server.get('/static/cv/arnaud_babol_en.pdf', (req, res) =>
    res.redirect('/static/assets/arnaud_babol.pdf'),
  );
  server.get('/static/arnaud_babol.pdf', (req, res) =>
    res.redirect('/static/assets/arnaud_babol.pdf'),
  );
  server.get('/onboarding', (req, res) =>
    res.redirect(
      'https://blog.shine.fr/ux-case-study-shine-bank-80-conversion-onboarding-6b230e2c2b70',
    ),
  );
  server.get('/rating', (req, res) =>
    res.redirect(
      'https://blog.shine.fr/how-weve-increased-our-store-rating-to-4-8-4ee8308641f4',
    ),
  );

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
