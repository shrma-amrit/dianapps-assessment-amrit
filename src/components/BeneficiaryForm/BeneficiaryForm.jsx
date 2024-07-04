import PropTypes from "prop-types";
import { Modal } from "../common/Modal";
import "./BeneficiaryForm.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBeneficiaryById } from "../../features/manageBeneficiaries/manageBeneficiariesSelectors";
import { useFormik } from "formik";
import {
  addBeneficiary,
  editBeneficiary,
} from "../../features/manageBeneficiaries/manageBeneficiariesSlice";
import { generateRandomId } from "../../utils/utils";
import { Input } from "../common/Input";
import * as Yup from "yup";
import { Dropdown } from "../common/Dropdown";
import { useState } from "react";
import Alert from "../common/Alert/Alert";

function BeneficiaryForm({ closeBeneficiaryModal, id, actionType }) {
  const dispatch = useDispatch();
  const [isAddEditBeneficiaryAlertOpen, setIsAddEditBeneficiaryAlertOpen] =
    useState(false);

  const beneficiaryById = useSelector(selectBeneficiaryById(id));

  const formik = useFormik({
    initialValues: {
      fullName: beneficiaryById?.fullName || "",
      address: beneficiaryById?.address || "",
      country: beneficiaryById?.country || "",
      pincode: beneficiaryById?.pincode || "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("* mandatory field"),
      address: Yup.string().required("* mandatory field"),
      country: Yup.string().required("* mandatory field"),
      pincode: Yup.string().required("* mandatory field"),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      if (actionType === "Edit" && id) {
        dispatch(editBeneficiary({ ...values, id }));
      } else if (actionType === "Add") {
        dispatch(addBeneficiary({ ...values, id: generateRandomId() }));
      }
    },
  });

  const submitFormHandler = (e) => {
    formik.handleSubmit(e);
    if (formik.isValid) {
      closeBeneficiaryModal();
    }
  };

  const pincodeChangeHandler = (e) => {
    const { value } = e.target;
    const regex = /^[0-9]*$/;

    if (
      regex.test(value) &&
      (formik.values.pincode?.length <= 5 || value.length <= 6)
    ) {
      formik.handleChange(e);
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Modal
        title={`${actionType} Beneficiary`}
        closeModal={closeBeneficiaryModal}
        isSubmitButtonVisible
        submitButtonText={actionType}
        onSubmitClick={() => {
          if (formik.isValid) {
            setIsAddEditBeneficiaryAlertOpen(true);
          } else {
            Object.keys(formik.values).map((val) => {
              formik.setFieldTouched(val, true);
            });
          }
        }}
      >
        <Input
          title="Full Name"
          type="text"
          inputId="fullName"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && formik.errors.fullName}
          value={formik.values.fullName}
        />
        <div className="pt-2">
          <Input
            title="Address"
            type="text"
            inputId="address"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && formik.errors.address}
            value={formik.values.address}
          />
        </div>
        <div className="pt-2 formThirdRow">
          <div className="countryInput">
            <Dropdown
              title="Country"
              required
              onChange={(value) => {
                formik.setFieldValue("country", value);
              }}
              onTouch={() => {
                formik.setFieldTouched("country", true);
              }}
              error={formik.touched.country && formik.errors.country}
              value={formik.values.country}
              options={[
                { id: "IND", value: "India" },
                { id: "RSA", value: "South Africa" },
                { id: "AUS", value: "Australia" },
                { id: "USA", value: "USA" },
                { id: "CHN", value: "China" },
              ]}
            />
          </div>
          <div className="pincodeInput">
            <Input
              title="Pincode"
              type="text"
              inputId="pincode"
              required
              onChange={pincodeChangeHandler}
              onBlur={formik.handleBlur}
              error={formik.touched.pincode && formik.errors.pincode}
              value={formik.values.pincode}
            />
          </div>
        </div>
      </Modal>
      {isAddEditBeneficiaryAlertOpen ? (
        <Alert
          message={
            actionType === "Edit" && id
              ? "Are you sure you want to edit this item?"
              : "Add new item to beneficiary list?"
          }
          closeAlert={() => {
            setIsAddEditBeneficiaryAlertOpen(false);
          }}
          type="INFO"
          isSubmitButtonVisible
          submitButtonText={actionType}
        />
      ) : (
        <></>
      )}
    </form>
  );
}

BeneficiaryForm.propTypes = {
  closeBeneficiaryModal: PropTypes.func.isRequired,
  id: PropTypes.string,
  actionType: PropTypes.oneOf(["Add", "Edit"]).isRequired,
};

export default BeneficiaryForm;
