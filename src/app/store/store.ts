import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// query reducers
import userApi from "../api/apiList/user.ts";

//slices
import usersSlice from "./slices/usersSlice.ts";

export const store = configureStore({
   reducer: {
      //slices
      users: usersSlice,

      // query reducers
      [userApi.reducerPath]: userApi.reducer,
   },
   // Adding the api middleware enables caching, invalidation, polling,
   // and other useful features of `rtk-query`.
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         userApi.middleware,
      ),
})

setupListeners(store.dispatch)