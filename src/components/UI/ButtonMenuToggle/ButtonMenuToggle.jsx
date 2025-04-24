import ButtonAction from '@/components/UI/ButtonAction/ButtonAction';
import Hamburger from '@assets/images/menu-2.svg?react';
import styles from './ButtonMenuToggle.module.css';

function ButtonMenuToggle({ isMenuOpen, onClick }) {
  return (
    <ButtonAction
      ariaLabel="open menu"
      ariaControls="main-menu"
      ariaExpanded={isMenuOpen}
      className={styles.btnMenu}
      onClick={onClick}
    >
      <Hamburger />
    </ButtonAction>
  );
}

export default ButtonMenuToggle;
