import styles from './MyOrganization.module.css'
import UsersSearch from "../../../features/UsersSearch";
import UsersTable from "../../../features/UsersTable";

const MyOrganization = () => {
   return (
      <div className={styles.wrapper}>
         <header className={styles.header}>
            <h3 className={styles.title}>Моя организация</h3>
         </header>

         <div className={styles.content}>
            <h3 className={styles.title}>Пользователи</h3>
            <UsersSearch />
            <UsersTable />
         </div>
      </div>
   );
};

export default MyOrganization;