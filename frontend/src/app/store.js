import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userSlice'

export default configureStore({
  reducer: {
      user: userReducer,
  },
})