import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../styles/UserVertical.module.css";
import { useState } from "react";
import UserModal from "./UserModal";
import { maxWidth } from "../../utils/test/test";

const UserVerticalTree = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* <h3>You With Your Team Memeber</h3>
      <h4>current Width {width}</h4> */}
      <div className={styles.tree}>
        {user && (
          <ul className={styles.first}>
            <li>
              <details open>
                <summary>
                  {" "}
                  <div className={styles.user__container}>
                    <Image
                      src={
                        user.picture
                          ? user.picture
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      width="30px"
                      height="30px"
                      alt=""
                      onClick={() => setCurrentUser(user)}
                    />
                    <span>{user.name}</span>
                  </div>
                </summary>{" "}
                <ul>
                  {user?.teamMembers?.map((user) => (
                    <li>
                      <details open>
                        <summary>
                          {" "}
                          <div className={styles.user__container}>
                            <Image
                              src={
                                user.picture
                                  ? user.picture
                                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              }
                              width="30px"
                              height="30px"
                              alt=""
                              onClick={() => setCurrentUser(user)}
                            />
                            <span>{user.name}</span>
                          </div>
                        </summary>
                        {user.teamMembers && (
                          <ul>
                            {user?.teamMembers?.map((user) => (
                              <li>
                                <details open>
                                  <summary>
                                    <div className={styles.user__container}>
                                      <Image
                                        src={
                                          user.picture
                                            ? user.picture
                                            : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        }
                                        width="30px"
                                        height="30px"
                                        alt=""
                                        onClick={() => setCurrentUser(user)}
                                      />
                                      <span>{user.name}</span>
                                    </div>
                                  </summary>
                                  {user.teamMembers.length > 0 && (
                                    <ul>
                                      {user?.teamMembers?.map((user) => (
                                        <li>
                                          <details open>
                                            <summary>
                                              {" "}
                                              <div
                                                className={
                                                  styles.user__container
                                                }
                                              >
                                                <Image
                                                  src={
                                                    user.picture
                                                      ? user.picture
                                                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                                  }
                                                  width="30px"
                                                  height="30px"
                                                  alt=""
                                                  onClick={() =>
                                                    setCurrentUser(user)
                                                  }
                                                />
                                                <span>{user.name}</span>
                                              </div>
                                            </summary>
                                            {user.teamMembers.length > 0 && (
                                              <ul>
                                                {user?.teamMembers?.map(
                                                  (user) => (
                                                    <li>
                                                      <details open>
                                                        <summary>
                                                          <div
                                                            className={
                                                              styles.user__container
                                                            }
                                                          >
                                                            <Image
                                                              src={
                                                                user.picture
                                                                  ? user.picture
                                                                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                                              }
                                                              width="30px"
                                                              height="30px"
                                                              alt=""
                                                              onClick={() =>
                                                                setCurrentUser(
                                                                  user
                                                                )
                                                              }
                                                            />
                                                            <span>
                                                              {user.name}
                                                            </span>
                                                          </div>
                                                        </summary>
                                                      </details>
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            )}
                                          </details>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </details>
                              </li>
                            ))}
                          </ul>
                        )}
                      </details>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        )}
      </div>
      {currentUser && (
        <UserModal user={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
};

export default UserVerticalTree;
