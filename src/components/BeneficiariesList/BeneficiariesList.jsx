import { useSelector } from "react-redux";
import "./BeneficiariesList.css";
import { selectBeneficiaries } from "../../features/manageBeneficiaries/manageBeneficiariesSelectors";
import BeneficiariesItem from "../BeneficiariesItem/BeneficiariesItem";

function BeneficiariesList() {
  const beneficiaries = useSelector(selectBeneficiaries);

  return (
    <div className="m-1">
      <div className="table">
        <div className="rowHeading">
          <div className="cellHeading">#</div>
          <div className="cellHeading">Full Name</div>
          <div className="cellHeading">Address</div>
          <div className="cellHeading">Country</div>
          <div className="cellHeading">Pincode</div>
          <div className="cellHeading"></div>
        </div>
        {(beneficiaries || []).map((beneficiary, index) => (
          <BeneficiariesItem
            key={beneficiary?.id}
            beneficiary={beneficiary}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default BeneficiariesList;
