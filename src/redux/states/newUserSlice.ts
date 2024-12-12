import { NewUser } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

const newUserEmptyState: NewUser = {
  user: {
    username: '',
    password: ''
  },
  person: {
    firstName: '',
    secondName: '',
    firstSurname: '',
    secondSurname: '',
    email: ''
  }
}

export const newUserSlice = createSlice({
  name: 'newUser',
  initialState: newUserEmptyState,
  reducers: {
    createNewUser: (_, action) => action.payload,
    modifyNewUser: (state, action) => ({ ...state, ...action.payload }),
    resetNewUser: () => newUserEmptyState
  }
})

export const { createNewUser, modifyNewUser, resetNewUser } =
  newUserSlice.actions

export default newUserSlice.reducer
