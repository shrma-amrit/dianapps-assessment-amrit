import { FaRegSadCry } from "react-icons/fa";
import { Button } from "../../components/common/Button";
import "./NotFound.css";
import { BENEFICIARY_PATH, HOME_PATH } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../../hooks";

function NotFound() {
  const navigate = useNavigate();
  useScrollToTop();

  const homeButtonClickHandler = () => {
    navigate(HOME_PATH);
  };

  const manageBeneficiariesButtonClickHandler = () => {
    navigate(`/${BENEFICIARY_PATH}`);
  };

  return (
    <div className="displayFlex alignCenter justifyCenter flex-1">
      <div className="displayFlex alignCenter flexColumn">
        <FaRegSadCry className="cryIcon" />
        <div className="errorNumber">{"404"}</div>
        <div className="errorText">{"Page not found"}</div>
        <div className="navigateMessage">
          {"to continue using application, click any of below 👇"}
        </div>
        <Button primary type={"TEXT"} onClick={homeButtonClickHandler}>
          {"Home"}
        </Button>
        <Button
          primary
          type={"TEXT"}
          onClick={manageBeneficiariesButtonClickHandler}
        >
          {"Manage Beneficiaries"}
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
