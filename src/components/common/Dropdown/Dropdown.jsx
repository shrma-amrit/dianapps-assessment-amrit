import PropTypes from "prop-types";
import "./Dropdown.css";
import { clsx } from "clsx";
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import DropdownItem from "./DropdownItem";

function Dropdown({
  title,
  required = false,
  value,
  onChange,
  onTouch,
  error,
  options,
}) {
  const dropdownItemsContainerRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDropdownOpen === false) {
      onTouch();
    } else if (isDropdownOpen === true && dropdownItemsContainerRef?.current) {
      const handleClickOutside = (event) => {
        if (
          dropdownItemsContainerRef.current &&
          !dropdownItemsContainerRef.current.contains(event.target)
        ) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDropdownOpen]);

  const displayContent = value || `${title}${required ? " *" : ""}`;

  return (
    <div className="relative" ref={dropdownItemsContainerRef}>
      <div className="dropdownContainer">
        <div
          className={clsx("displayContent", {
            dropdownOpen: isDropdownOpen,
          })}
          onClick={toggleDropdown}
        >
          {displayContent}
          {isDropdownOpen ? <FaRegCaretSquareUp /> : <FaRegCaretSquareDown />}
        </div>
        {value ? (
          <div
            className={clsx("dropdownLabel", {
              dropdownHasValue: value,
              dropdownOpenLabel: !!(value && isDropdownOpen),
            })}
          >
            {`${title}${required ? " *" : ""}`}
          </div>
        ) : (
          <></>
        )}
      </div>
      {error && !isDropdownOpen ? (
        <div className="errorMessage">{error}</div>
      ) : (
        <></>
      )}
      {isDropdownOpen ? (
        <div className="dropdownItemsContainer">
          {options?.map((option) => (
            <DropdownItem
              key={option?.id}
              value={option?.value}
              handleClick={() => {
                onChange(option?.value);
                setIsDropdownOpen(false);
              }}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onTouch: PropTypes.func.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown;
