import ListLinks from '@/components/UI/ListLinks/ListLinks';
import styles from './NavMainMenu.module.css';

function NavMainMenu({ isMenuOpen, onClick }) {
  const menuItems = [
    {
      title: 'home',
      ariaLabel: 'Go to Home',
      path: '/',
    },
    {
      title: 'clothing',
      ariaLabel: 'Go to Clothing page',
      path: `/category/${encodeURIComponent("women's clothing")}`,
    },
    {
      title: 'jewelry',
      ariaLabel: 'Go to Jewelry page',
      path: '/category/jewelery',
    },
  ];

  return (
    <nav aria-label="Main menu" className={styles.menuList}>
      <ListLinks
        ariaControlsId="main-menu"
        isOpen={isMenuOpen}
        listItemContents={menuItems}
        ulClass={styles.mainMenu}
        linkClass={`uiLink ${styles.link}`}
        linkOnClick={onClick}
      />
    </nav>
  );
}

export default NavMainMenu;
