import Image from "next/image";
import React from "react";
import styles from "../../styles/Team/Generation.module.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setFetchTeam, setTeamMember } from "../../redux/userSlice";
import { useRouter } from "next/router";
import { getLevels } from "../../utils/test/test";

const Generation = ({ user }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo, fetchTeam } = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.generations}>
        {getLevels(user).map((item) => (
          <div className={styles.generation}>
            {item?.map(
              (userItem) =>
                userItem && (
                  <div className={styles.user__item}>
                    <Image
                      src={
                        userItem.picture
                          ? userItem.picture
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      width="30px"
                      height="30px"
                      alt=""
                      // onClick={() => setCurrentUser(userItem)}
                    />
                    <span>{userItem.name}</span>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generation;
