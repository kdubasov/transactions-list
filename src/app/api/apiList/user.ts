import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_LIST, API_TRANSACTIONS, API_URL, API_USER} from '../../../shared/constants/api.ts'
import {IUser, IUserTransItem} from "../../../shared/types/users.ts";


const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL + API_USER }),
  endpoints: (builder) => ({
    getUsers: builder.query<{ pages: number, data: IUser[] }, string>({
      query: (query) => API_LIST + query,
    }),
    getUserTransactions: builder.query<IUserTransItem[], string>({
      query: (query) => query + API_TRANSACTIONS,
    }),
  }),
})

export default userApi
