import PropTypes from "prop-types";
import "./TextButton.css";
import { clsx } from "clsx";

function TextButton({
  children,
  primary = true,
  secondary = false,
  ghost = false,
  submit = false,
  onClick = () => {},
}) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={clsx("button", { primary, secondary, ghost })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

TextButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
  submit: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default TextButton;
