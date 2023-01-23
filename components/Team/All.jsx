import Image from "next/image";
import React from "react";
import styles from "../../styles/Team/AllUser.module.css";

const All = ({ users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        {users?.map((user) => (
          <div className={styles.user__container}>
            <div className={styles.pic}>
              {" "}
              <Image
                src={
                  user.picture
                    ? user.picture
                    : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                width="40px"
                height="40px"
                alt=""
                // onClick={() => setCurrentUser(user)}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.email}>{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
