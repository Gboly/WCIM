import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isDev } from "../util/functions";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: isDev ? "http://localhost:5000" : "https://wcim.vercel.app",
  }),
  tagTypes: ["Paystack", "Story"],
  endpoints: () => ({}),
});
