import styles from './UsersTable.module.css'
import {Spinner, Table} from "react-bootstrap";
import {useLazyGetUsersQuery} from "../../../app/api";
import {useEffect, useState} from "react";
import {IUser} from "../../../shared/types/users.ts";
import PaginationBlock from "../../../shared/ui/PaginationBlock";
import {useUsersSlice} from "../../../shared/hooks/useUsersSlice.ts";

const UsersTable = () => {

   const [allPages, setAllPages] = useState<number | null>(null)
   const [page, setPage] = useState<number>(1)
   const [token, setToken] = useState<'asc' | 'desc'>('asc')
   const [usersList, setUsersList] = useState<null | IUser[]>(null)
   const [ getUsers, { isLoading } ] = useLazyGetUsersQuery()
   const { searchQuery } = useUsersSlice()

   const switchTokenFilters = () => {
      if (token === 'asc') {
         setToken('desc')
      } else {
         setToken('asc')
      }
   }

   //check filters and fetch query
   useEffect(() => {
      getUsers(`?page=${page}&search=${searchQuery}&orderBy=tokens%3A${token}`).unwrap()
         .then(res => {
            setAllPages(res.pages)
            setUsersList(res.data)
         })
   }, [page, token, searchQuery]);

   if (isLoading) {
      return (
         <div className={styles.loaderConatiner}>
            <Spinner />
         </div>
      )
   }

   if (!usersList || (!searchQuery && !usersList.length)) {
      return (
         <div className={styles.loaderConatiner}>
            <h4>Ошибка получения пользователей!</h4>
         </div>
      )
   }

   if (!usersList.length) {
      return (
         <div className={styles.loaderConatiner}>
            <h4>Пользователи по вашему запросу не найдены!</h4>
         </div>
      )
   }

   return (
      <div className={styles.wrapper}>
         <Table variant={'dark'}>
            <thead>
               <tr>
                  <th>Email</th>
                  <th>Имя</th>
                  <th>Роль</th>
                  <th>Подписка</th>
                  <th onClick={switchTokenFilters} className={styles.hover}>
                     Токены
                     <img
                        src="/images/icons/arrow-narrow-down.svg"
                        alt="sort"
                        className={`${styles.arrowSort} ${token === 'asc' ? '' : styles.revert}`}
                     />
                  </th>
                  <th>Дейтсвия</th>
               </tr>
            </thead>

            <tbody>
               {
                  usersList?.map(elem => (
                     <tr key={elem.id}>
                        <td>{elem.email}</td>
                        <td>{elem.name}</td>
                        <td>{elem.role}</td>
                        <td>{elem.subscription.plan.type}</td>
                        <td>{elem.subscription.tokens}</td>
                        <td className={styles.actions}>
                           <img src="/images/icons/edit.svg" alt="edit"/>
                           <img src="/images/icons/trash.svg" alt="trash"/>
                        </td>
                     </tr>
                  ))
               }
            </tbody>
         </Table>

         <footer className={styles.footer}>
            {
               (allPages && allPages > 1) &&
               <PaginationBlock
                  pages={allPages}
                  activePage={page}
                  setPage={setPage}
               />
            }
         </footer>
      </div>
   );
};

export default UsersTable;