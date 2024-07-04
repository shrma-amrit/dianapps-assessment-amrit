import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../app/baseQuery";

export const manageBeneficiariesApi = createApi({
  reducerPath: "manageBeneficiariesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllBeneficiaries: builder.query({
      query: () => "/beneficiaries",
    }),
    createBeneficiary: builder.mutation({
      query: (newBeneficiary) => ({
        url: "/beneficiaries",
        method: "POST",
        body: newBeneficiary,
      }),
    }),
    updateBeneficiary: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/beneficiaries/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    removeBeneficiary: builder.mutation({
      query: (id) => ({
        url: `/beneficiaries/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBeneficiariesQuery,
  useLazyGetAllBeneficiariesQuery,
  useCreateBeneficiaryMutation,
  useRemoveBeneficiaryMutation,
  useUpdateBeneficiaryMutation,
} = manageBeneficiariesApi;
