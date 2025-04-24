import styles from './Credits.module.css';

function Credits() {
  return (
    <div className={styles.format}>
      Icons by{' '}
      <a
        href="https://feathericons.com"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        Feather
      </a>
      <br />
      Hero photo by{' '}
      <a
        href="https://unsplash.com/photos/black-combat-shoes-Af3GEg0DMEw"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        Alyssa Strohmann{' '}
      </a>
      on{' '}
      <a
        href="https://unsplash.com"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        {' '}
        Unsplash
      </a>
      <br />
      Category photos by{' '}
      <a
        href="https://www.pexels.com/photo/person-tightening-a-belt-8989534/"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        Alena Darmel
      </a>{' '}
      and{' '}
      <a
        href="https://www.pexels.com/photo/a-woman-with-gold-necklaces-9489731/"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        Ron Rach{' '}
      </a>
      on{' '}
      <a
        href="https://www.pexels.com"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        {' '}
        Pexels
      </a>
      <br />
      Image of "coming soon" by{' '}
      <a
        href="https://www.freepik.com/free-vector/image-template-background_1058826.htm"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        articular on Freepik
      </a>
      <br />
      Error and Under Construction images by{' '}
      <a href="https://undraw.co/" className={`uiLink ${styles.underline}`}>
        unDraw
      </a>
      <br />
      Shop Items API by{' '}
      <a
        href="https://fakestoreapi.com/"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        Fake Store API
      </a>
      <br />
      Website development by{' '}
      <a
        href="https://github.com/kbelltree"
        className={`uiLink ${styles.underline}`}
        target="_blank"
      >
        Keiko S.
      </a>
      , 2025.
    </div>
  );
}

export default Credits;
