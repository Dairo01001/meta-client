import { configureStore } from '@reduxjs/toolkit'
import { newUserSlice } from './states'
import { fullUserSlice } from './states/fullUserSlice'
import { userSlice } from './states/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    fullUser: fullUserSlice.reducer,
    newUser: newUserSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
