import PropTypes from "prop-types";
import "./IconButton.css";

function IconButton({ children, onClick = () => {} }) {
  return (
    <div className="iconButton" onClick={onClick}>
      {children}
    </div>
  );
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
