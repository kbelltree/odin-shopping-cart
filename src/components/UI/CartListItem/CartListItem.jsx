import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fallback from '@assets/images/fallback-img-OLS2VJ0-Designed-by-Articular-Freepik.webp';
import Remove from '@assets/images/x-circle.svg?react';
import ButtonAction from '@/components/UI/ButtonAction/ButtonAction';
import { useOutletContext } from 'react-router-dom';
import styles from './CartListItem.module.css';

function CartListItem({ itemData }) {
  const { deleteCartItem } = useOutletContext();
  return (
    <li className={styles.list}>
      <div className={styles.placeholder}>
        <img
          src={itemData.image || fallback}
          alt={itemData.title}
          className={styles.imgLayout}
        />
      </div>
      <Link
        // transform itemData.id from number to string for 'to' path
        to={itemData.id ? `/category/${itemData.category}/${itemData.id}` : '/'}
        aria-label={itemData.title && `Go to ${itemData.title} page`}
        className={styles.link}
      >
        <h2 className={`uiLink ${styles.title}`}>
          {itemData.title || 'Error'}
        </h2>
      </Link>
      <p className={styles.price}>
        {typeof itemData.price !== 'number' ? 'Error' : itemData.price}
      </p>
      <ButtonAction
        ariaLabel="remove this item"
        onClick={() => deleteCartItem(itemData.uniqueId)}
      >
        <Remove className={`uiBtnIcon ${styles.btnRemove}`} />
      </ButtonAction>
    </li>
  );
}

CartListItem.propTypes = {
  itemData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    uniqueId: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartListItem;
