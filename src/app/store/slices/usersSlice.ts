import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IUsersSlice {
   searchQuery: string
}

const initialState: IUsersSlice = {
   searchQuery: '',
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setSearchQuery: (state, action: PayloadAction<string>) => {
         state.searchQuery = action.payload
      }
   },
})

export const { setSearchQuery } = usersSlice.actions
export default usersSlice.reducer