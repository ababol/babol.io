import { BlogPosts } from '@/components/BlogPosts/BlogPosts';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Link
        className="link sticky mt-5 flex justify-end"
        href="https://babol.io/assets/arnaud_babol_cv.pdf"
        target="_blank"
      >
        Download CV
      </Link>
      <Header />
      <BlogPosts />
      <Footer />
    </>
  );
}
