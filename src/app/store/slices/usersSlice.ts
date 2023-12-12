import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IUsersSlice {
   searchQuery: string
   selectedUser: null | {
      id: string
      email: string
   }
}

const initialState: IUsersSlice = {
   searchQuery: '',
   selectedUser: null,
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setSearchQuery: (state, action: PayloadAction<string>) => {
         state.searchQuery = action.payload
      },
      setSelectedId: (state, action: PayloadAction<null | { id: string, email: string }>) => {
         state.selectedUser = action.payload
      },
   },
})

export const { setSearchQuery, setSelectedId } = usersSlice.actions
export default usersSlice.reducer