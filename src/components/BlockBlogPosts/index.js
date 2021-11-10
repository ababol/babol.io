import React from 'react';
import BlogPost from '../BlogPost';

export default ({ posts }) => (
  <section className="BlockBlogPosts container m-vertical-100">
    <h2 className="Title m-bottom-30">Blog Posts</h2>
    <ul className="BlockBlogPosts__list">
      {posts.map(
        ({
          clapCount,
          id,
          title,
          mediumUrl,
          previewContent: { subtitle },
          previewImage: { id: imageId },
        }) => (
          <BlogPost
            className="BlockBlogPosts__list-item"
            key={id}
            title={title}
            description={subtitle}
            claps={clapCount}
            mediumUrl={mediumUrl}
            cover={{
              url: `https://miro.medium.com/max/4720/${imageId}`,
            }}
          />
        ),
      )}
    </ul>
  </section>
);
