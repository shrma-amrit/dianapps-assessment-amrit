import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beneficiaries: [
    {
      id: "ci43jy110",
      fullName: "Amrit Sharma",
      address: "264, Jai Veeru Enclave, Mansarovar",
      country: "India",
      pincode: "302029",
    },
    {
      id: "ci43jy111",
      fullName: "Ayushi Dangayach",
      address: "13756, C street, New York",
      country: "USA",
      pincode: "330239",
    },
  ],
};

export const manageBeneficiariesSlice = createSlice({
  name: "manageBeneficiaries",
  initialState,
  reducers: {
    setBeneficiaries: (state, action) => {
      if (Array.isArray(action?.payload)) {
        state.beneficiaries = action?.payload;
      }
    },
    addBeneficiary: (state, action) => {
      if (Array.isArray(state?.beneficiaries)) {
        state.beneficiaries.push(action.payload);
      }
    },
    editBeneficiary: (state, action) => {
      const index = (
        Array.isArray(state?.beneficiaries) ? state.beneficiaries : []
      ).findIndex((beneficiary) => beneficiary?.id === action?.payload?.id);

      if (index !== -1) {
        state.beneficiaries[index] = action.payload;
      }
    },
    deleteBeneficiary: (state, action) => {
      const index = (
        Array.isArray(state?.beneficiaries) ? state.beneficiaries : []
      ).findIndex((beneficiary) => beneficiary?.id === action?.payload?.id);

      if (index !== -1) {
        state.beneficiaries.splice(index, 1);
      }
    },
  },
});

export const { addBeneficiary, editBeneficiary, deleteBeneficiary } =
  manageBeneficiariesSlice.actions;

export default manageBeneficiariesSlice.reducer;
