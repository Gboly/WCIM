import { apiSlice } from "../api";

export const extendedPaymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStories: builder.query({
      query: ({ start, end }) => `/story?start=${start}&end=${end}`,
      transformResponse: (response) => response,
      providesTags: (result) =>
        result && [
          { type: "Story", id: "List" },
          ...(result || []).map(({ _id }) => ({ type: "Story", id: _id })),
        ],
    }),
    getStoriesByCategory: builder.query({
      query: ({ start, end, category }) =>
        `/story?start=${start}&end=${end}&category=${category}`,
      transformResponse: (response) => response,
      providesTags: (result) =>
        result && [
          { type: "Story", id: "List" },
          ...(result || []).map(({ _id }) => ({ type: "Story", id: _id })),
        ],
    }),
    getStoryByName: builder.query({
      query: ({ start, end, name }) =>
        `/story?start=${start}&end=${end}&name=${name}`,
      transformResponse: (response) => response[0],
      providesTags: (result) =>
        result && [
          { type: "Story", id: "List" },
          ...(result || []).map(({ _id }) => ({ type: "Story", id: _id })),
        ],
    }),
  }),
});

export const {
  useGetStoriesQuery,
  useGetStoriesByCategoryQuery,
  useGetStoryByNameQuery,
} = extendedPaymentApiSlice;
