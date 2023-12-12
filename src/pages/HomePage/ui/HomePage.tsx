import styles from './HomePage.module.css'
import MyOrganization from "../../../widgets/MyOrganization";
import UserOperations from "../../../widgets/UserOperations";

const HomePage = () => {
   return (
      <div className={styles.wrapper}>
         <MyOrganization />
         <UserOperations />
      </div>
   );
};

export default HomePage;