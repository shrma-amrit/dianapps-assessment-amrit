import PropTypes from "prop-types";
import "./Input.css";
import { clsx } from "clsx";

function Input({
  title,
  type,
  inputId,
  required = false,
  value,
  onChange = () => {},
  onBlur = () => {},
  error = undefined,
  disabled = false,
}) {
  return (
    <>
      <div className="relative w-100">
        <input
          id={inputId}
          type={type}
          className="inputField"
          value={value}
          name={inputId}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
        <label
          htmlFor={inputId}
          className={clsx("inputLabel", {
            inputHasValue: value,
          })}
        >
          {`${title}${required ? " *" : ""}`}
        </label>
      </div>
      {error ? <div className="errorMessage">{error}</div> : <></>}
    </>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["number", "text"]).isRequired,
  inputId: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;
