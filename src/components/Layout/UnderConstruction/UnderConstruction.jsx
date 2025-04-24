import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import styles from './UnderConstruction.module.css';
function UnderConstruction() {
  return (
    <div className="container">
      <h1 className={styles.text}>
        Sorry. <br />
        This page is under construction.
      </h1>
      <ButtonLink
        toPath="/"
        label="Go to Homepage"
        className={`btnGreen ${styles.btnLink}`}
      />
      <div className={styles.placeholder}></div>
    </div>
  );
}

export default UnderConstruction;
