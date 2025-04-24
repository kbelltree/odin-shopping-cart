import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListLinks({
  listItemContents,
  ariaControlsId,
  isOpen,
  ulClass,
  liClass,
  linkClass,
  linkOnClick,
}) {
  return (
    // id is required only when connecting with a button's aria-controls
    <ul id={ariaControlsId} data-displayed={isOpen} className={ulClass}>
      {listItemContents.map((content) => (
        <li
          key={content.title}
          aria-label={content.ariaLabel}
          className={liClass}
        >
          <Link
            to={content.path || '/'}
            className={linkClass}
            onClick={linkOnClick}
          >
            {content.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

ListLinks.propTypes = {
  listItemContents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  ariaControlsId: PropTypes.string,
  isOpen: PropTypes.boolean,
  uiClass: PropTypes.string,
  liClass: PropTypes.string,
  linkClass: PropTypes.string,
  linkOnClick: PropTypes.func,
};

export default ListLinks;
