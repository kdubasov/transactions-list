import OffCanvasMenu from "../../../shared/ui/OffCanvasMenu";
import styles from './UserOperations.module.css'
import {useUsersSlice} from "../../../shared/hooks/useUsersSlice.ts";
import {useEffect, useState} from "react";
import {useLazyGetUserTransactionsQuery} from "../../../app/api";
import {IUserTransItem} from "../../../shared/types/users.ts";
import UserTransGraph from "../../../features/UserTransGraph";
import UserTransTable from "../../../features/UserTransTable";

const UserOperations = () => {

   const { selectedUser, setSelectedId } = useUsersSlice()
   const [ getTrans ] = useLazyGetUserTransactionsQuery()
   const [data, setData] = useState<null | IUserTransItem[]>(null)

   useEffect(() => {
      if (!selectedUser) return
      getTrans(selectedUser.id).unwrap()
         .then(res => setData(res))
   }, [selectedUser?.id]);

   return (
      <>
         <OffCanvasMenu
            show={!!selectedUser}
            onHide={() => setSelectedId(null)}
            title={selectedUser?.email}
         >
            <h5 className={styles.title}>Использование токенов</h5>
            {data && <UserTransGraph data={data}/>}

            <div className={styles.line}/>

            <h5 className={styles.title}>История операций</h5>
            {data && <UserTransTable data={data} />}
         </OffCanvasMenu>
      </>
   );
};

export default UserOperations;