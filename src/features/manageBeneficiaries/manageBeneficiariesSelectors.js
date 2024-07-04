const selectBeneficiaries = (state) => state.manageBeneficiaries.beneficiaries;

const selectBeneficiaryById = (id) => (state) =>
  (state.manageBeneficiaries.beneficiaries || []).find(
    (beneficiary) => beneficiary.id === id
  );

export { selectBeneficiaries, selectBeneficiaryById };
