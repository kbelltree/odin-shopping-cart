import logoImage from '@assets/images/OdinShopLogo-kbelltree-2025-min.png';
import styles from './Logo.module.css';

function Logo() {
  return (
    <img
      className={styles.logo}
      src={logoImage}
      width="106px"
      height="58px"
      alt="Odin Boutique Shop logo"
    />
  );
}

export default Logo;
