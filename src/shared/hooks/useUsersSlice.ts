import {useAppDispatch, useAppSelector} from "../../app/store";
import {setSearchQuery, setSelectedId} from "../../app/store/slices/usersSlice.ts";

export const useUsersSlice = () => {
   const {
      searchQuery,
      selectedUser,
   } = useAppSelector(state => state.users)
   const dispatch = useAppDispatch()

   return {
      searchQuery,
      selectedUser,
      setSearchQuery: (value: string) => dispatch(setSearchQuery(value)),
      setSelectedId: (value: { id: string, email: string } | null) => dispatch(setSelectedId(value)),
   }
}