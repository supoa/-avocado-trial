import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../styles/UserTree.module.css";
import { useState } from "react";
import UserModal from "../utils/UserModal";
import { maxWidth } from "../../utils/test/test";

const UserTree = ({ user }) => {
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
      <div className={styles.tree}>
        <ul>
          {user && (
            <li>
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
              {user?.teamMembers?.length > 0 && (
                <ul>
                  {user?.teamMembers.map((user) => (
                    <li>
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
                      {user?.teamMembers?.length > 0 && (
                        <ul>
                          {user?.teamMembers.map((user) => (
                            <li>
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
                              {user?.teamMembers?.length > 0 && (
                                <ul>
                                  {user?.teamMembers.map((user) => (
                                    <li>
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
                                      {user?.teamMembers?.length > 0 && (
                                        <ul>
                                          {user?.teamMembers.map((user) => (
                                            <li>
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
                                              {user?.teamMembers?.length >
                                                0 && (
                                                <ul>
                                                  {user?.teamMembers.map(
                                                    (user) => (
                                                      <li>
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
                                                        {user?.teamMembers
                                                          ?.length > 0 && (
                                                          <ul>
                                                            {user?.teamMembers.map(
                                                              (user) => (
                                                                <li>
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
                                                                  {user
                                                                    ?.teamMembers
                                                                    ?.length >
                                                                    0 && (
                                                                    <ul>
                                                                      {user?.teamMembers.map(
                                                                        (
                                                                          user
                                                                        ) => (
                                                                          <li>
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
                                                                            {user
                                                                              ?.teamMembers
                                                                              ?.length >
                                                                              0 && (
                                                                              <ul>
                                                                                {user?.teamMembers.map(
                                                                                  (
                                                                                    user
                                                                                  ) => (
                                                                                    <li>
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
                                                                                      {user
                                                                                        ?.teamMembers
                                                                                        ?.length >
                                                                                        0 && (
                                                                                        <ul>
                                                                                          {user?.teamMembers.map(
                                                                                            (
                                                                                              user
                                                                                            ) => (
                                                                                              <li>
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
                                                                                                {user
                                                                                                  ?.teamMembers
                                                                                                  ?.length >
                                                                                                  0 && (
                                                                                                  <ul>
                                                                                                    {user?.teamMembers.map(
                                                                                                      (
                                                                                                        user
                                                                                                      ) => (
                                                                                                        <li>
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
                                                                                                          {user
                                                                                                            ?.teamMembers
                                                                                                            ?.length >
                                                                                                            0 && (
                                                                                                            <ul>
                                                                                                              {user?.teamMembers.map(
                                                                                                                (
                                                                                                                  user
                                                                                                                ) => (
                                                                                                                  <li>
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
                                                                                                                    {user
                                                                                                                      ?.teamMembers
                                                                                                                      ?.length >
                                                                                                                      0 && (
                                                                                                                      <ul>
                                                                                                                        {user?.teamMembers.map(
                                                                                                                          (
                                                                                                                            user
                                                                                                                          ) => (
                                                                                                                            <li>
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
                                                                                                                              {user
                                                                                                                                ?.teamMembers
                                                                                                                                ?.length >
                                                                                                                                0 && (
                                                                                                                                <ul>
                                                                                                                                  {user?.teamMembers.map(
                                                                                                                                    (
                                                                                                                                      user
                                                                                                                                    ) => (
                                                                                                                                      <li>
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
                                                                                                                                        {user
                                                                                                                                          ?.teamMembers
                                                                                                                                          ?.length >
                                                                                                                                          0 && (
                                                                                                                                          <ul>
                                                                                                                                            {user?.teamMembers.map(
                                                                                                                                              (
                                                                                                                                                user
                                                                                                                                              ) => (
                                                                                                                                                <li>
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
                                                                                                                                                  {user
                                                                                                                                                    ?.teamMembers
                                                                                                                                                    ?.length >
                                                                                                                                                    0 && (
                                                                                                                                                    <ul>
                                                                                                                                                      {user?.teamMembers.map(
                                                                                                                                                        (
                                                                                                                                                          user
                                                                                                                                                        ) => (
                                                                                                                                                          <li>
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
                                                                                                                                                            {user
                                                                                                                                                              ?.teamMembers
                                                                                                                                                              ?.length >
                                                                                                                                                              0 && (
                                                                                                                                                              <ul>
                                                                                                                                                                {user?.teamMembers.map(
                                                                                                                                                                  (
                                                                                                                                                                    user
                                                                                                                                                                  ) => (
                                                                                                                                                                    <li>
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
                                                                                                                                                                      {user
                                                                                                                                                                        ?.teamMembers
                                                                                                                                                                        ?.length >
                                                                                                                                                                        0 && (
                                                                                                                                                                        <ul>
                                                                                                                                                                          {user?.teamMembers.map(
                                                                                                                                                                            (
                                                                                                                                                                              user
                                                                                                                                                                            ) => (
                                                                                                                                                                              <li>
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
                                                                                                                                                                                {user
                                                                                                                                                                                  ?.teamMembers
                                                                                                                                                                                  ?.length >
                                                                                                                                                                                  0 && (
                                                                                                                                                                                  <ul>
                                                                                                                                                                                    {user?.teamMembers.map(
                                                                                                                                                                                      (
                                                                                                                                                                                        user
                                                                                                                                                                                      ) => (
                                                                                                                                                                                        <li>
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
                                                                                                                                                                                          {user
                                                                                                                                                                                            ?.teamMembers
                                                                                                                                                                                            ?.length >
                                                                                                                                                                                            0 && (
                                                                                                                                                                                            <ul>
                                                                                                                                                                                              {user?.teamMembers.map(
                                                                                                                                                                                                (
                                                                                                                                                                                                  user
                                                                                                                                                                                                ) => (
                                                                                                                                                                                                  <li>
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
                                                                                                                                                                                                  </li>
                                                                                                                                                                                                )
                                                                                                                                                                                              )}
                                                                                                                                                                                            </ul>
                                                                                                                                                                                          )}
                                                                                                                                                                                        </li>
                                                                                                                                                                                      )
                                                                                                                                                                                    )}
                                                                                                                                                                                  </ul>
                                                                                                                                                                                )}
                                                                                                                                                                              </li>
                                                                                                                                                                            )
                                                                                                                                                                          )}
                                                                                                                                                                        </ul>
                                                                                                                                                                      )}
                                                                                                                                                                    </li>
                                                                                                                                                                  )
                                                                                                                                                                )}
                                                                                                                                                              </ul>
                                                                                                                                                            )}
                                                                                                                                                          </li>
                                                                                                                                                        )
                                                                                                                                                      )}
                                                                                                                                                    </ul>
                                                                                                                                                  )}
                                                                                                                                                </li>
                                                                                                                                              )
                                                                                                                                            )}
                                                                                                                                          </ul>
                                                                                                                                        )}
                                                                                                                                      </li>
                                                                                                                                    )
                                                                                                                                  )}
                                                                                                                                </ul>
                                                                                                                              )}
                                                                                                                            </li>
                                                                                                                          )
                                                                                                                        )}
                                                                                                                      </ul>
                                                                                                                    )}
                                                                                                                  </li>
                                                                                                                )
                                                                                                              )}
                                                                                                            </ul>
                                                                                                          )}
                                                                                                        </li>
                                                                                                      )
                                                                                                    )}
                                                                                                  </ul>
                                                                                                )}
                                                                                              </li>
                                                                                            )
                                                                                          )}
                                                                                        </ul>
                                                                                      )}
                                                                                    </li>
                                                                                  )
                                                                                )}
                                                                              </ul>
                                                                            )}
                                                                          </li>
                                                                        )
                                                                      )}
                                                                    </ul>
                                                                  )}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        )}
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              )}
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
      {currentUser && (
        <UserModal user={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
};

export default UserTree;
