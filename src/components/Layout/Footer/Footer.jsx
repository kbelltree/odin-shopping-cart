import ListLinks from '@/components/UI/ListLinks/ListLinks';
import SNSLinks from '@/components/UI/SNSLinks/SNSLinks';
import Credits from '@/components/UI/Credits/Credits';
import styles from './Footer.module.css';

function Footer() {
  const footerNavLinks = [
    {
      title: 'our story',
      ariaLabel: 'Go to Our Story',
      path: 'under-construction',
    },
    {
      title: 'contact us',
      ariaLabel: 'Go to Contact Us',
      path: 'under-construction',
    },
    {
      title: 'shipping and return',
      ariaLabel: 'Go to Shipping and Return',
      path: 'under-construction',
    },
  ];

  return (
    <footer>
      <ListLinks
        listItemContents={footerNavLinks}
        liClass={styles.list}
        linkClass={`uiLink ${styles.link}`}
      />
      <SNSLinks />
      <Credits />
    </footer>
  );
}

export default Footer;
