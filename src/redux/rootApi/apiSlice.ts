
import { getInfoToLocal } from '@/share/getInfoToLocal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


let token = getInfoToLocal('token')

const customBaseQuery = fetchBaseQuery({
  // baseUrl: 'https://beauty-spa-backend.vercel.app/api/v1',
  baseUrl: 'http://localhost:8000/api/v1',
  prepareHeaders(headers) {
    headers.set('Authorization', `Bearer ${getInfoToLocal('token')}`);
    return headers;
  },
  credentials: 'include',
});
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  tagTypes:[],
})
