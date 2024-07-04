import { configureStore } from "@reduxjs/toolkit";
import manageBeneficiariesReducer from "../features/manageBeneficiaries/manageBeneficiariesSlice";
import { manageBeneficiariesApi } from "../features/manageBeneficiaries/manageBeneficiariesApi";

export const store = configureStore({
  reducer: {
    manageBeneficiaries: manageBeneficiariesReducer,
    [manageBeneficiariesApi.reducerPath]: manageBeneficiariesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(manageBeneficiariesApi.middleware),
});
