import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { BENEFICIARY_PATH } from "../../utils/constants";
import "./Home.css";
import { useScrollToTop } from "../../hooks";

function Home() {
  const navigate = useNavigate();
  useScrollToTop();

  const manageBeneficiariesButtonClickHandler = () => {
    navigate(`/${BENEFICIARY_PATH}`);
  };

  return (
    <div className="displayFlex alignCenter justifyCenter flex-1">
      <div className="displayFlex alignCenter flexColumn">
        <div className="welcomePara">
          {"Welcome to beneficiary management portal"}
        </div>
        <div className="clickPara">
          {"to manage beneficiaries, click below 👇"}
        </div>
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

export default Home;
