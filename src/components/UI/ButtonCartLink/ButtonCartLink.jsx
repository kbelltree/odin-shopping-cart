import ShoppingBag from '@assets/images/shopping-bag.svg?react';
import { Link } from 'react-router-dom';
import styles from './ButtonCartLink.module.css';

function ButtonCartLink({ itemCount }) {
  return (
    <div className={styles.linkCart}>
      <Link to="cart" aria-label="Go to Shopping Cart" className={styles.link}>
        <ShoppingBag className={`uiBtnIcon ${styles.svgSize}`} />
      </Link>
      <span className={styles.text}>
        {/* sr-only text -- only count prop is visible on screen */}
        <span className="srOnly">current cart items count</span>
        {itemCount}
      </span>
    </div>
  );
}

export default ButtonCartLink;
