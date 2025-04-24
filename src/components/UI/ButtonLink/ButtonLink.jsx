import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ButtonLink({ toPath = '/', label, className }) {
  return (
    <Link to={toPath} className={className}>
      {label}
    </Link>
  );
}

ButtonLink.propTypes = {
  toPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonLink;
