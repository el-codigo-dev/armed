import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const mainApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
//   tagTypes: ['doctorsControl'],

  endpoints: (build) => ({
    fetchDoctors: build.query({
      query: () => '/doctors',
    }),
    fetchSales: build.query({
      query: (id) => `/sales`,
    }),
  }),
});
export const {} = mainApi;
