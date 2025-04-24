import PropTypes from 'prop-types';
function ButtonAction({
  type = 'button',
  ariaLabel,
  ariaControls,
  ariaExpanded,
  className,
  children,
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonAction.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired, // This should cover any types of element in the children in button
  onClick: PropTypes.func.isRequired,
};

export default ButtonAction;
