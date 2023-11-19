import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './rootApi/apiSlice'
import userSlice from './feature/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch