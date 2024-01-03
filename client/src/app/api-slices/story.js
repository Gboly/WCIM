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
    getStoriesByQuery: builder.query({
      query: ({ start, end, query }) =>
        `/story?start=${start}&end=${end}&${query}`,
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
      transformResponse: (response) => response?.error || response[0],
      providesTags: (result) =>
        result && [
          { type: "Story", id: "List" },
          { type: "Story", id: result?._id },
        ],
    }),
    searchStories: builder.query({
      query: ({ start, end, searchText }) =>
        `/story/search?start=${start}&end=${end}&searchText=${searchText}`,
      transformResponse: (response) => response,
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
  useGetStoriesByQueryQuery,
  useGetStoryByNameQuery,
  useSearchStoriesQuery,
} = extendedPaymentApiSlice;
