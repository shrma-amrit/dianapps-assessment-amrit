import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { Button } from "../Button";

function Modal({
  closeModal,
  title,
  children,
  isSubmitButtonVisible = false,
  submitButtonText = "Submit",
  onSubmitClick = () => {},
}) {
  useEffect(() => {
    const prevStyle = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevStyle;
    };
  }, []);

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <Button type={"ICON"} onClick={closeModal}>
            <FaRegTimesCircle />
          </Button>
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <Button type={"TEXT"} secondary onClick={closeModal}>
            Close
          </Button>
          {isSubmitButtonVisible ? (
            <Button type={"TEXT"} primary onClick={onSubmitClick}>
              {submitButtonText}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isSubmitButtonVisible: PropTypes.bool.isRequired,
  submitButtonText: PropTypes.string,
  onSubmitClick: PropTypes.func,
};

export default Modal;
