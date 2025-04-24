import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import getClonedItemDataArray from '@/components/utility/getClonedItemDataArray';
import ButtonAction from '@/components/UI/ButtonAction/ButtonAction';
import styles from './ButtonAddToCart.module.css';

function ButtonAddToCart({ itemData }) {
  const [count, setCount] = useState(0);
  const { updateCart } = useOutletContext();

  function reduceCount() {
    setCount((prev) => (prev <= 0 ? 0 : prev - 1));
  }

  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  function inputCount(e) {
    const value = e.target.value;

    // Edge: exit with default in case empty string is entered (parseInt returns NaN)
    if (value === '') {
      setCount(0);
      return;
    }

    const inInt = parseInt(value, 10);
    if (!isNaN(inInt) && inInt >= 0) {
      setCount(inInt);
    }
  }

  const itemsToAdd = getClonedItemDataArray(count, itemData);

  return (
    <div className={styles.ui}>
      <div className={styles.counter}>
        <ButtonAction
          ariaLabel="Decrease quantity"
          onClick={reduceCount}
          className={styles.btnCounter}
        >
          -
        </ButtonAction>
        <label htmlFor="count" className="srOnly">
          current item count
        </label>
        <input
          id="count"
          type="text"
          value={count}
          inputMode="numeric"
          pattern="\d*"
          onChange={inputCount}
          className={styles.input}
        />
        <ButtonAction
          ariaLabel="Increase quantity"
          onClick={increaseCount}
          className={styles.btnCounter}
        >
          +
        </ButtonAction>
      </div>
      <ButtonAction
        onClick={() => itemsToAdd && updateCart(itemsToAdd)}
        className={`btnGreen ${styles.btnAdd}`}
      >
        Add To Bag
      </ButtonAction>
    </div>
  );
}

export default ButtonAddToCart;
