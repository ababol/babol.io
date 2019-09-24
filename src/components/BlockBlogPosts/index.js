import React from 'react';
import BlogPost from '../BlogPost';

export default ({ posts }) => (
  <section className="BlockBlogPosts container m-vertical-100">
    <h2 className="Title m-bottom-30">Blog Posts</h2>
    <ul className="BlockBlogPosts__list">
      {posts.map(
        ({
          itemType: {
            post: {
              clapCount,
              id,
              mediumUrl,
              previewContent: { bodyModel: { paragraphs } },
            },
          },
        }) => (
          <BlogPost
            className="BlockBlogPosts__list-item"
            key={id}
            title={paragraphs[1].text}
            description={paragraphs[2].text}
            claps={clapCount}
            mediumUrl={mediumUrl}
            cover={{
              url: paragraphs[0].metadata.id,
              width: paragraphs[0].metadata.originalWidth,
              height: paragraphs[0].metadata.originalHeight,
            }}
          />
        ),
      )}
    </ul>
  </section>
);
