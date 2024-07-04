import PropTypes from "prop-types";
import "./BeneficiaryCard.css";
import { useNavigate } from "react-router-dom";
import { BENEFICIARY_PATH, HOME_PATH } from "../../utils/constants";
import { Input } from "../common/Input";

function BeneficiaryCard({ beneficiary }) {
  const navigate = useNavigate();

  const homeLinkClickHandler = () => {
    navigate(HOME_PATH);
  };

  const listLinkClickHandler = () => {
    navigate(`/${BENEFICIARY_PATH}`);
  };

  return (
    <div className="beneficiaryCardContainer">
      <div className="beneficiaryCard">
        <div className="linkContainer">
          <span className="homeLink" onClick={homeLinkClickHandler}>
            {"Home"}
          </span>
          <span>{" / "}</span>
          <span className="listLink" onClick={listLinkClickHandler}>
            {"List of beneficiaries"}
          </span>
          <span>{` / ${beneficiary?.id}`}</span>
        </div>

        <Input
          title="Full Name"
          type="text"
          inputId="fullName"
          disabled
          value={beneficiary?.fullName}
        />
        <div className="pt-2">
          <Input
            title="Address"
            type="text"
            inputId="address"
            disabled
            value={beneficiary?.address}
          />
        </div>
        <div className="pt-2 formThirdRow">
          <div className="countryInput">
            <Input
              title="Country"
              type="text"
              inputId="country"
              disabled
              value={beneficiary?.country}
            />
          </div>
          <div className="pincodeInput">
            <Input
              title="Pincode"
              type="text"
              inputId="pincode"
              disabled
              value={beneficiary?.pincode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

BeneficiaryCard.propTypes = {
  beneficiary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
  }),
};

export default BeneficiaryCard;
