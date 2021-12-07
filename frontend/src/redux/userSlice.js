import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'userSession',
    initialState: {
      currentUser: '',
    },
    reducers: {
      setUser: (state, action) => {
        state.currentUser = action.payload
      },
      resetUser: (state) => {
          state.currentUser = ''
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setUser, resetUser } = userSlice.actions
  
  export default userSlice.reducer