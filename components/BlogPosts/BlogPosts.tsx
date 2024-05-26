import { BlogPostItem } from './BlogPostItem';

const POSTS = [
  {
    title: 'UX Case Study: Shine bank 80% conversion onboarding',
    description:
      'Getting people to be interested in your product is hard  so when they  are taking the plunge and finally downloading your app, you don’t…',
    coverUrl:
      'https://miro.medium.com/v2/resize:fit:1080/1*8mG66iiwNK0UCBnAu1BRuw.png',
    clapCount: '1.8K',
    mediumUrl:
      'https://medium.com/shinefr/ux-case-study-shine-bank-80-conversion-onboarding-6b230e2c2b70'
  },
  {
    title: 'How we’ve increased our store rating to 4.9🌟',
    description:
      'Your store rating is key to increase your app’s downloads and  ensure its success. Ratings and reviews are a beautiful weapon to convince…',
    coverUrl:
      'https://miro.medium.com/v2/resize:fit:1080/1*09vx5sT3iHiteo0ZuFibXA.png',
    clapCount: '1.1K',
    mediumUrl:
      'https://medium.com/@ababol/how-weve-increased-our-store-rating-to-4-8-4ee8308641f4'
  }
];
export const BlogPosts = () => (
  <section className="space-y-10">
    <h2 className="text-3xl font-medium">Blog Posts</h2>
    <ul className="grid gap-8 md:grid-cols-2">
      {POSTS.map(({ title, description, mediumUrl, clapCount, coverUrl }) => (
        <BlogPostItem
          key={title}
          title={title}
          description={description}
          clapCount={clapCount}
          mediumUrl={mediumUrl}
          coverUrl={coverUrl}
        />
      ))}
    </ul>
  </section>
);
