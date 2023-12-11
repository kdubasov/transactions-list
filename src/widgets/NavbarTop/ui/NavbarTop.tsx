import styles from './NavbarTop.module.css'
import { Link } from 'react-router-dom'
import UserInfo from "../../../features/UserInfo";


const NavbarTop = () => {
   return (
      <nav className={styles.wrapper}>
         <div className={styles.right}>
            <h4 className={styles.logo}>
               BitTest
            </h4>

            <div className={styles.links}>
               <Link to="/">
                  <img src={'/images/icons/organization.svg'} alt={'organization'}/>
                  Моя организация
               </Link>
            </div>
         </div>

         <UserInfo />
      </nav>
   );
};

export default NavbarTop;