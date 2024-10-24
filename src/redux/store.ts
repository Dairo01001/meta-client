import { User } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './states/userSlice'

export interface AppStore {
  user: User
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
