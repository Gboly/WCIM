import { apiSlice } from "../api";

export const extendedScholarshipApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createScholarshipApplication: builder.mutation({
      query: (credentials) => ({
        url: "/scholarship/apply",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => response,
      invalidatesTags: [{ type: "Scholarship", id: "list" }],
    }),
  }),
});

export const { useCreateScholarshipApplicationMutation } =
  extendedScholarshipApiSlice;
