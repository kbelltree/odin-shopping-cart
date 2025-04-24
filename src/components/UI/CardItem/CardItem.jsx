import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fallback from '@assets/images/fallback-img-OLS2VJ0-Designed-by-Articular-Freepik.webp';
import styles from './CardItem.module.css';

function CardItem({ toPath, linkTitle, imgSrc, imgAlt, itemTitle, itemPrice }) {
  return (
    <article>
      <Link to={toPath ? toPath : '/'} aria-label={linkTitle}>
        <div className={styles.placeholder}>
          <img
            src={imgSrc ? imgSrc : fallback}
            alt={imgAlt}
            className={styles.imgLayout}
          />
        </div>
        {itemTitle && <h2 className={styles.title}>{itemTitle}</h2>}
        {itemPrice && <p className={styles.text}>{`USD ${itemPrice}`}</p>}
      </Link>
    </article>
  );
}

CardItem.propTypes = {
  toPath: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  itemTitle: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
};

export default CardItem;
