import styles from './UserInfo.module.css'

const UserInfo = () => {
   return (
      <div className={styles.wrapper}>
         <img src="/images/icons/default-avatar.svg" alt="user"/>

         <div className={styles.info}>
            <small>Вы авторизованы</small>
            <p>Администратор</p>
         </div>
      </div>
   );
};

export default UserInfo;