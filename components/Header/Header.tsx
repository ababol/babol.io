import Link from 'next/link';

export const Header = () => (
  <header className="mb-[200px] mt-[100px] flex flex-col space-y-4">
    <p className="font-extralight">👋 I am Arnaud,</p>

    <h1 className="text-3xl">
      a Software Engineer working{' '}
      <Link
        className="link"
        href="https://shotgun.live"
        rel="noopener noreferrer"
        target="_blank"
      >
        @Shotgun
      </Link>
    </h1>

    <div className="space-y-1 font-extralight">
      <p>
        I am sharing design studies on{' '}
        <Link
          className="link"
          href="https://medium.com/@ababol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </Link>{' '}
        and code on{' '}
        <Link
          className="link"
          href="https://github.com/ababol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        .
      </p>
      <p>
        You can contact me on{' '}
        <Link className="link" href="mailto:a@babol.io">
          a@babol.io
        </Link>
        .
      </p>
    </div>
  </header>
);
