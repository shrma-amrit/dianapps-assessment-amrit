import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { HOME_PATH } from "../../utils/constants";
import "./ManageBeneficiaries.css";
import { BeneficiariesList } from "../../components/BeneficiariesList";
import { useState } from "react";
import { useScrollToTop } from "../../hooks";
import BeneficiaryForm from "../../components/BeneficiaryForm/BeneficiaryForm";

function ManageBeneficiaries() {
  const navigate = useNavigate();
  useScrollToTop();

  const [isAddBeneficiaryModalOpen, setIsAddBeneficiaryModalOpen] =
    useState(false);

  const closeAddBeneficiaryModal = () => {
    setIsAddBeneficiaryModalOpen(false);
  };

  const addBeneficiaryButtonClickHandler = () => {
    setIsAddBeneficiaryModalOpen(true);
  };

  const homeLinkClickHandler = () => {
    navigate(HOME_PATH);
  };

  return (
    <div>
      <div className="displayFlex alignCenter spaceBetween beneficiaryHeader">
        <div className="m-1">
          <span className="homeLink" onClick={homeLinkClickHandler}>
            Home
          </span>
          <span className="listText">{" / List of beneficiaries"}</span>
        </div>
        <Button
          primary
          type={"TEXT"}
          onClick={addBeneficiaryButtonClickHandler}
        >
          Add Beneficiary
        </Button>
        {isAddBeneficiaryModalOpen ? (
          <BeneficiaryForm
            actionType="Add"
            closeBeneficiaryModal={closeAddBeneficiaryModal}
          />
        ) : (
          <></>
        )}
      </div>
      <BeneficiariesList />
    </div>
  );
}

export default ManageBeneficiaries;
