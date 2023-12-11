import {useAppDispatch, useAppSelector} from "../../app/store";
import {setSearchQuery} from "../../app/store/slices/usersSlice.ts";

export const useUsersSlice = () => {
   const {
      searchQuery,
   } = useAppSelector(state => state.users)
   const dispatch = useAppDispatch()

   return {
      searchQuery,
      setSearchQuery: (value: string) => dispatch(setSearchQuery(value)),
   }
}