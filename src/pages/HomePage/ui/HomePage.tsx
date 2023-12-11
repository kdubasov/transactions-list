import styles from './HomePage.module.css'
import MyOrganization from "../../../widgets/MyOrganization";

const HomePage = () => {
   return (
      <div className={styles.wrapper}>
         <MyOrganization />
      </div>
   );
};

export default HomePage;