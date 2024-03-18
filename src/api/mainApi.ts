import { baseUrl } from '@/utils/config';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + '/api',
    prepareHeaders: (headers) => {

      return headers;
    },
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
export const {useFetchDoctorsQuery, useFetchSalesQuery} = mainApi;
