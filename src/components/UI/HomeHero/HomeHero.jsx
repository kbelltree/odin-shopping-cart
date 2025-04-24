import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import heroImage from '@assets/images/alyssa-strohmann-Af3GEg0DMEw-unsplash-min.webp';
import styles from './HomeHero.module.css';

function HomeHero() {
  const contents = {
    imageSrc: heroImage,
    altText:
      'Interior view of Odin Boutique, with natural light and neatly arranged apparel.',
    heading: 'Welcome!',
    bodyText:
      'You’ve arrived at Odin Boutique, a mock boutique created with care as part of The Odin Project. Our shop collection of clothing and jewelry is exactly what our trusty mock API had to offer. Enjoy!',
    path: '/category/all',
    label: 'Shop Now',
  };

  return (
    <section className={styles.hero}>
      <div className={`layoutL ${styles.spacerTopBottom}`}>
        <div className={styles.placeholder}>
          <img src={contents.imageSrc} alt={contents.altText} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.heading}>{contents.heading}</h1>
          <p className={styles.textContent}>{contents.bodyText}</p>
          <ButtonLink
            toPath={contents.path}
            label={contents.label}
            className={`btnGreen ${styles.btnLink}`}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
