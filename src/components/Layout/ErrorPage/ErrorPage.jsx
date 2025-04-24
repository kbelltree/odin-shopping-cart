import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={`container ${styles.topSpace}`}>
      <p className="srOnly">Error Happened.</p>
      <ButtonLink
        toPath="/"
        label="Go to Homepage"
        className={`btnGreen ${styles.btnLink}`}
      />
      <div className={styles.placeholder}></div>
    </div>
  );
}

export default ErrorPage;
