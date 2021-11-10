import React from 'react';
import cx from 'classnames';
import Clap from '../../icons/Clap';

export default ({ className, mediumUrl, title, description, claps, cover }) => (
  <li className={cx('BlogPost', className)}>
    <a href={mediumUrl} rel="noopener" target="_blank">
      <article>
        <figure itemProp="image" itemType="http://schema.org/ImageObject">
          <img src={cover.url} width={cover.width} alt={title} />
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
