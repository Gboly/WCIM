import { apiSlice } from "../api";
import axios from "axios";

export const extendedPaymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initPaystack: builder.mutation({
      query: (credentials) => ({
        url: "/payment/paystack/initialize",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => response?.data,
      invalidatesTags: [{ type: "Paystack", id: "initialize" }],
    }),

    getCountriesAndStates: builder.query({
      queryFn: async () => {
        try {
          const result = await axios.get(
            "https://countriesnow.space/api/v0.1/countries/states"
          );
          return { data: result.data.data };
        } catch (axiosError) {
          let err = axiosError;
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        }
      },
    }),
  }),
});

export const { useInitPaystackMutation, useGetCountriesAndStatesQuery } =
  extendedPaymentApiSlice;
