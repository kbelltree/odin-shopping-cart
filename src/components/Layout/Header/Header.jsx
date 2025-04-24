import { useState } from 'react';
import ButtonMenuToggle from '@/components/UI/ButtonMenuToggle/ButtonMenuToggle';
import Logo from '@components/UI/Logo/Logo';
import ButtonCartLink from '@components/UI/ButtonCartLink/ButtonCartLink';
import NavMainMenu from '@components/UI/NavMainMenu/NavMainMenu';
import styles from './Header.module.css';

function Header({ itemCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function clickHandler() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <header>
      <div className={`container ${styles.layout}`}>
        <ButtonMenuToggle isMenuOpen={isMenuOpen} onClick={clickHandler} />
        <Logo />
        <ButtonCartLink itemCount={itemCount} />
        <NavMainMenu isMenuOpen={isMenuOpen} onClick={clickHandler} />
      </div>
    </header>
  );
}

export default Header;
