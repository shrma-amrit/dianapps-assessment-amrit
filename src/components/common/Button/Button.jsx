import PropTypes from "prop-types";
import { IconButton } from "./IconButton";
import { TextButton } from "./TextButton";

function Button({
  children,
  primary = true,
  secondary = false,
  ghost = false,
  submit = false,
  onClick = () => {},
  type = "TEXT",
}) {
  switch (type) {
    case "ICON":
      return <IconButton onClick={onClick}>{children}</IconButton>;
    case "TEXT":
      return (
        <TextButton
          primary={primary}
          secondary={secondary}
          ghost={ghost}
          submit={submit}
          onClick={onClick}
        >
          {children}
        </TextButton>
      );
    default:
      return <></>;
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(["ICON", "TEXT"]).isRequired,
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

export default Button;
