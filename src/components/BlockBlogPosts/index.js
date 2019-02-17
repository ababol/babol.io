import React from 'react';
import BlogPost from '../BlogPost';

export default ({ posts }) => (
  <section className="BlockBlogPosts container m-vertical-100">
    <h2 className="Title m-bottom-30">Blog Posts</h2>
    <ul className="BlockBlogPosts__list">
      {posts.map(
        ({
          id,
          title,
          virtuals: {
            previewImage: {
              imageId: url,
              originalWidth: width,
              originalHeight: height,
            },
            totalClapCount,
          },
          content: { subtitle },
          uniqueSlug,
        }) => (
          <BlogPost
            className="BlockBlogPosts__list-item"
            key={id}
            title={title}
            description={subtitle}
            claps={totalClapCount}
            slug={uniqueSlug}
            cover={{ url, width, height }}
          />
        ),
      )}
    </ul>
  </section>
);
