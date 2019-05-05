import React from 'react';
import cx from 'classnames';
import Clap from '../../icons/clap.svg';

export default ({ className, slug, title, description, claps, cover }) => (
  <li className={cx('BlogPost', className)}>
    <a
      href={`https://medium.com/@ababol/${slug}`}
      rel="noopener"
      target="_blank"
    >
      <article>
        <figure itemProp="image" itemType="http://schema.org/ImageObject">
          <img
            src={`https://cdn-images-1.medium.com/max/800/${cover.url}`}
            width={cover.width}
            alt={title}
          />
        </figure>
        <header className="BlogPost__header BlogPost--content">
          <h2 className="BlogPost__title">{title}</h2>
        </header>
        <p className="BlogPost__description BlogPost--content">{description}</p>
        <footer className="BlogPost__footer BlogPost--content">
          <span className="BlogPost__claps">
            <Clap height={20} />
            <span className="BlogPost__claps-number">{claps}</span>
          </span>
          <span>See more</span>
        </footer>
      </article>
    </a>
  </li>
);
