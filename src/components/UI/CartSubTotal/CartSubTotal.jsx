import { sumItemPrice } from '@/components/utility/sum';
import { useOutletContext } from 'react-router-dom';
import styles from './CartSubTotal.module.css';

function CartSubTotal() {
  const { cart } = useOutletContext();

  // Return '0.00' if 'cartData' is empty
  const subTotal = cart.length <= 0 ? '0.00' : sumItemPrice(cart);

  return (
    <div className={styles.total}>
      <strong>
        <p>Subtotal</p>
        <p>{`USD ${subTotal}`}</p>
      </strong>
      <p>Shipping and taxes calculated at checkout.</p>
    </div>
  );
}

export default CartSubTotal;
