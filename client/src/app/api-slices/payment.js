import { apiSlice } from "../api";
import axios from "axios";
import { isPaystack } from "../../util/functions";

export const extendedPaymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initPayment: builder.mutation({
      query: (credentials) => ({
        url: `/payment/${
          isPaystack(credentials) ? "paystack" : "stripe"
        }/initialize`,
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => response?.data,
      invalidatesTags: [{ type: "Payment", id: "initialize" }],
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

export const { useInitPaymentMutation, useGetCountriesAndStatesQuery } =
  extendedPaymentApiSlice;
