import CardItem from '@/components/UI/CardItem/CardItem';
import styles from './ItemsByCategory.module.css';

function ItemsByCategory({ categoryTitle, itemsData }) {
  if (!itemsData) return null;

  return (
    <section className={`container ${styles.layout}`}>
      <h1 className={styles.heading}>
        {categoryTitle === "women's clothing"
          ? 'clothing'
          : categoryTitle === 'jewelery'
            ? 'jewelry'
            : categoryTitle}
      </h1>
      <div className={styles.itemsLayout}>
        {itemsData.map((item) => (
          <CardItem
            key={item.title}
            toPath={`/category/${categoryTitle}/${item.id}`}
            linkTitle={item.title}
            imgSrc={item.image}
            imgAlt={item.title}
            itemTitle={item.title}
            itemPrice={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ItemsByCategory;
