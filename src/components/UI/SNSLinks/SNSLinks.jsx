import FBIcon from '@assets/images/facebook.svg?react';
import IGIcon from '@assets/images/instagram.svg?react';
import styles from './SNSLinks.module.css';

function SNSLinks() {
  const linkItems = [
    {
      name: 'facebook',
      hrefLink: '#',
      ariaLabel: 'Go to Facebook (opens in new window)',
      icon: <FBIcon className={`uiBtnIcon ${styles.svg}`} />,
    },
    {
      name: 'instagram',
      hrefLink: '#',
      ariaLabel: 'Go to Instagram (opens in new window)',
      icon: <IGIcon className={`uiBtnIcon ${styles.svg}`} />,
    },
  ];

  return (
    <div className={styles.layout}>
      {linkItems.map((linkItem) => (
        <a
          key={linkItem.name}
          href={linkItem.hrefLink}
          aria-label={linkItem.ariaLabel}
          target="_blank"
          className={styles.link}
        >
          {linkItem.icon}
        </a>
      ))}
    </div>
  );
}

export default SNSLinks;
