import { apiSlice } from "../api";

export const extendedPaymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initPaystack: builder.mutation({
      query: (credentials) => ({
        url: "/payment/paystack/initialize",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Paystack", id: "initialize" }],
    }),
  }),
});

export const { useInitPaystackMutation } = extendedPaymentApiSlice;
