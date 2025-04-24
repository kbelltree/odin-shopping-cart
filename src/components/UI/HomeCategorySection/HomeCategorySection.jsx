import CardCategory from '@/components/UI/CardCategory/CardCategory';
import styles from './HomeCategorySection.module.css';

function HomeCategorySection() {
  const cardContents = [
    {
      categoryTitle: 'clothing',
      path: `category/${encodeURIComponent("women's clothing")}`,
      linkTitle: 'shop',
      imgClass: styles.imgClothing,
    },
    {
      categoryTitle: 'jewelry',
      path: 'category/jewelery',
      linkTitle: 'shop',
      imgClass: styles.imgJewelry,
    },
  ];

  return (
    <section className={`container ${styles.category}`}>
      <h2 className={styles.heading}>Shop by Category</h2>
      <div className={styles.horizontalLayout}>
        {cardContents.map((content) => (
          <CardCategory
            key={content.categoryTitle}
            categoryTitle={content.categoryTitle}
            path={content.path}
            linkTitle={content.linkTitle}
            imgClass={content.imgClass}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeCategorySection;
