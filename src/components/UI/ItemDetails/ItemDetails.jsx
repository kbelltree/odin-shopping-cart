import { useParams, useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonAddToCart from '@/components/UI/ButtonAddToCart/ButtonAddToCart';
import fallback from '@assets/images/fallback-img-OLS2VJ0-Designed-by-Articular-Freepik.webp';
import styles from './ItemDetails.module.css';

function findItemDetailsById(data, id) {
  if (!data) return;
  let formatId = id;
  if (typeof id !== 'number') {
    formatId = parseInt(id, 10);
  }
  return data.find((item) => item.id === formatId);
}

function ItemDetails() {
  const { id } = useParams();
  const { allData, error, isLoading } = useOutletContext();
  const itemData = findItemDetailsById(allData, id);

  if (isLoading) return <p>Loading...</p>;
  if (error || !itemData) return <p>Something went wrong.</p>;

  return (
    <main>
      <section className={`layoutL ${styles.spacer}`}>
        <div className={styles.placeholder}>
          {itemData.image ? (
            <img
              src={itemData.image}
              alt={itemData.title}
              className={styles.imgLayout}
            />
          ) : (
            <img
              src={fallback}
              alt="Coming soon"
              className={styles.imgLayout}
            />
          )}
        </div>
        <div className={styles.text}>
          {itemData.title && (
            <h1 className={styles.heading}>{itemData.title}</h1>
          )}
          {itemData.price && (
            <p className={styles.price}>{`USD ${itemData.price}`}</p>
          )}
          {itemData.description && (
            <p className={styles.description}>{itemData.description}</p>
          )}
          <ButtonAddToCart itemData={itemData} />
        </div>
      </section>
    </main>
  );
}

ItemDetails.propTypes = {
  itemData: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ItemDetails;
