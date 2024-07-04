import PropTypes from "prop-types";
import "./Alert.css";
import { useEffect } from "react";
import { Button } from "../Button";
import { FaRegTimesCircle } from "react-icons/fa";
import { clsx } from "clsx";
import { IoWarningOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Alert({
  closeAlert,
  type,
  isSubmitButtonVisible = false,
  submitButtonText = "Submit",
  message,
  isCancelPrimary = false,
  onSubmitClick = () => {},
}) {
  useEffect(() => {
    const prevStyle = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevStyle;
    };
  }, []);

  const renderAlertIcon = () => {
    switch (type) {
      case "INFO":
        return (
          <div className="alertHeading">
            <IoMdCheckmarkCircleOutline
              style={{ color: "#5EA962", height: "1.5rem", width: "1.5rem" }}
            />
            <div>Info</div>
          </div>
        );
      case "WARNING":
        return (
          <div className="alertHeading">
            <IoWarningOutline
              style={{ color: "#FFA500", height: "1.5rem", width: "1.5rem" }}
            />
            <div>Warning</div>
          </div>
        );
      case "ERROR":
        return (
          <div className="alertHeading">
            <IoWarningOutline
              style={{ color: "#FF0000", height: "1.5rem", width: "1.5rem" }}
            />
            <div>Error</div>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="overlay z-400" onClick={closeAlert}>
      <div className="alertContainer" onClick={(e) => e.stopPropagation()}>
        <div className="alertHeader">
          {renderAlertIcon()}
          <Button type={"ICON"} onClick={closeAlert}>
            <FaRegTimesCircle />
          </Button>
        </div>
        <div className="alertBody">{message}</div>
        <div
          className={clsx("alertFooter", {
            footerButtonOrderReverse: isCancelPrimary,
          })}
        >
          <Button
            type={"TEXT"}
            secondary={!isCancelPrimary}
            onClick={closeAlert}
          >
            {isSubmitButtonVisible ? "Cancel" : "Close"}
          </Button>
          {isSubmitButtonVisible ? (
            <Button
              type={"TEXT"}
              secondary={isCancelPrimary}
              onClick={onSubmitClick}
              submit
            >
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

Alert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onSubmitClick: PropTypes.func,
  submitButtonText: PropTypes.string,
  isSubmitButtonVisible: PropTypes.bool,
  isCancelPrimary: PropTypes.bool,
  type: PropTypes.oneOf(["INFO", "WARNING", "ERROR"]).isRequired,
};
export default Alert;
