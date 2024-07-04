import PropTypes from "prop-types";
import "./DropdownItem.css";

function DropdownItem({ value, handleClick }) {
  return (
    <div className="dropdownItem" onClick={handleClick}>
      {value}
    </div>
  );
}

DropdownItem.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DropdownItem;
