import styles from './UserTransTable.module.css'
import {Table} from "react-bootstrap";
import {ETransType, IUserTransItem} from "../../../shared/types/users.ts";
import {convertDateTime} from "../../../shared/utils/converDateTime.ts";

interface IProps {
   data: IUserTransItem[]
}

const UserTransTable = ({ data }: IProps) => {

   return (
      <div className={styles.wrapper}>
         <Table variant={'dark'}>
            <thead>
            <tr>
               <th>Тип</th>
               <th>Сумма</th>
               <th>Дата</th>
            </tr>
            </thead>

            <tbody>
            {
               data
                  ?.slice(0,5)
                  ?.map(elem => (
                     <tr key={elem.id}>
                        <td>{elem.type}</td>
                        <td className={elem.type === ETransType.REPLENISH ? styles.green : styles.red}>
                           {elem.type === ETransType.REPLENISH ? '+' : '-'}
                           {elem.amount} {String(elem.currency).slice(0,3)}
                        </td>
                        <td>{convertDateTime(elem.created_at)}</td>
                     </tr>
                  ))
            }
            </tbody>
         </Table>
      </div>
   );
};

export default UserTransTable;