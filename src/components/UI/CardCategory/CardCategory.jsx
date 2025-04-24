import PropTypes from 'prop-types';
import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import styles from './CardCategory.module.css';

// This card will contain image as decorative background and link button
function CardCategory({ imgClass, categoryTitle, path, linkTitle }) {
  return (
    <div
      className={`${styles.placeholder} ${imgClass ? imgClass : 'imgFallback'}`}
    >
      <div className={styles.text}>
        {categoryTitle && <h3 className={styles.title}>{categoryTitle}</h3>}
        <ButtonLink
          toPath={path ? path : '/'}
          label={linkTitle}
          className={`btnGreen ${styles.btnLink}`}
        />
      </div>
    </div>
  );
}

CardCategory.propTypes = {
  imgClass: PropTypes.string,
  categoryTitle: PropTypes.string,
  path: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};

export default CardCategory;
