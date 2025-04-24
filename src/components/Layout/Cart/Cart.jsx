import { useOutletContext } from 'react-router-dom';
import CartListItem from '@/components/UI/CartListItem/CartListItem';
import CartSubTotal from '@/components/UI/CartSubTotal/CartSubTotal';
import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import styles from './Cart.module.css';

function Cart() {
  const { cart } = useOutletContext();
  return (
    <main>
      <section className={`container ${styles.cart}`}>
        <h1 className={styles.heading}>Shopping Bag</h1>
        <ul className={styles.listLayout}>
          {cart.map((cartItem) => (
            <CartListItem itemData={cartItem} key={cartItem.uniqueId} />
          ))}
        </ul>
        <CartSubTotal cartData={cart} />
        <ButtonLink
          toPath="/under-construction"
          label="Go to Checkout"
          className={`btnGreen ${styles.btnCheckout}`}
        />
      </section>
    </main>
  );
}

export default Cart;
