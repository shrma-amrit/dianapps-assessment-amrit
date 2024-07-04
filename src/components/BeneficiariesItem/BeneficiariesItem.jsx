import PropTypes from "prop-types";
import { FaRegEdit, FaRegTrashAlt, FaRegEye } from "react-icons/fa";
import "./BeneficiariesItem.css";
import { IconButton } from "../common/Button/IconButton";
import { useState } from "react";
import BeneficiaryForm from "../BeneficiaryForm/BeneficiaryForm";
import { Alert } from "../common/Alert";
import { useDispatch } from "react-redux";
import { deleteBeneficiary } from "../../features/manageBeneficiaries/manageBeneficiariesSlice";
import { useNavigate } from "react-router-dom";
import { BENEFICIARY_PATH } from "../../utils/constants";

function BeneficiariesItem({ beneficiary, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditBeneficiaryModalOpen, setIsEditBeneficiaryModalOpen] =
    useState(false);
  const [isDeleteBeneficiaryAlertOpen, setIsDeleteBeneficiaryAlertOpen] =
    useState(false);

  return (
    <div className="rowItem">
      <div className="cellItem">{index + 1}</div>
      <div className="cellItem">{beneficiary?.fullName}</div>
      <div className="cellItem">{beneficiary?.address}</div>
      <div className="cellItem">{beneficiary?.country}</div>
      <div className="cellItem">{beneficiary?.pincode}</div>
      <div className="cellItem">
        <IconButton
          onClick={() => {
            setIsEditBeneficiaryModalOpen(true);
          }}
        >
          <FaRegEdit />
        </IconButton>{" "}
        {isEditBeneficiaryModalOpen ? (
          <BeneficiaryForm
            closeBeneficiaryModal={() => {
              setIsEditBeneficiaryModalOpen(false);
            }}
            id={beneficiary?.id}
            actionType="Edit"
          />
        ) : (
          <></>
        )}
        <IconButton
          onClick={() => {
            setIsDeleteBeneficiaryAlertOpen(true);
          }}
        >
          <FaRegTrashAlt />
        </IconButton>
        {isDeleteBeneficiaryAlertOpen ? (
          <Alert
            closeAlert={() => {
              setIsDeleteBeneficiaryAlertOpen(false);
            }}
            message="Are you sure you want to delete this item?"
            onSubmitClick={() => {
              dispatch(deleteBeneficiary({ id: beneficiary?.id }));
            }}
            type="WARNING"
            isSubmitButtonVisible
            submitButtonText="Delete"
            isCancelPrimary
          />
        ) : (
          <></>
        )}
        <IconButton
          onClick={() => {
            navigate(`/${BENEFICIARY_PATH}/${beneficiary?.id}`);
          }}
        >
          <FaRegEye />
        </IconButton>
      </div>
    </div>
  );
}

BeneficiariesItem.propTypes = {
  index: PropTypes.number.isRequired,
  beneficiary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
  }),
};

export default BeneficiariesItem;
