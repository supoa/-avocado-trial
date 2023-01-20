import { current } from "@reduxjs/toolkit";
import Image from "next/image";
import React from "react";
import styles from "../styles/UserTree.module.css";
import { useState } from "react";
import UserModal from "./utils/UserModal";

const UserTree = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <div className={styles.wrapper}>
      <h3>You With Your Team Memeber</h3>
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
