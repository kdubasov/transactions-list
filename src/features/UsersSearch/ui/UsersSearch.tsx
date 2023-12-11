import styles from './UsersSearch.module.css'
import {ChangeEvent, useEffect, useState} from "react";
import { useDebounce } from 'usehooks-ts'
import {useUsersSlice} from "../../../shared/hooks/useUsersSlice.ts";

const UsersSearch = () => {

   const { setSearchQuery } = useUsersSlice()
   const [value, setValue] = useState<string>('')
   const debouncedValue = useDebounce<string>(value, 500)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   useEffect(() => {
      //change query with a delay so that there are not many requests (save it in store)
      setSearchQuery(debouncedValue)
   }, [debouncedValue]);

   return (
      <div className={styles.wrapper}>
         <img className={styles.searchIcon} src="/images/icons/search-circle.svg" alt="search" />
         <input
            placeholder={'Поиск'}
            value={value}
            onChange={handleChange}
         />
      </div>
   );
};

export default UsersSearch;