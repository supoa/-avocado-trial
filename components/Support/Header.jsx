import axios from "axios";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeChat, setCurrentChat } from "../../redux/ChatSlice";
import styles from "../../styles/Support/Header.module.css";
import UserItem from "./UserItem";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Notification from "./Notification";
const Header = ({
  userInfo,
  notifications,
  setNotifications,
  isTyping,
  latestMessages,
  setLatestMessages,
}) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [openNotificationBar, setOpenNotificationBar] = useState(false);
  const currentChat = useSelector((state) => state.chat.currentChat);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "/api/chat",

        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setUsers(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo.isAdmin && fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      if (notifications.length > 0) {
        const latest = notifications[0];

        const latestUser = users.find((item) => item._id == latest.sender._id);

        const alExceptLatest = users.filter(
          (item) => item._id != latest.sender._id
        );

        latestUser && setUsers([...alExceptLatest, latestUser]);
      }
    }
  }, [notifications]);

  const startChatWith = async (user) => {
    try {
      const { data } = await axios.post(
        "/api/chat/admin",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setNotifications(
        notifications.filter((item) => item.sender._id != user._id)
      );
      dispatch(setCurrentChat(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {userInfo.isAdmin && (
          <CircleNotificationsIcon
            style={{ fontSize: "250%", cursor: "pointer" }}
            onClick={() => setOpenNotificationBar((prev) => !prev)}
          />
        )}
        <div className={styles.left__flex}>
          {" "}
          {userInfo.isAdmin ? (
            users
              .filter((item) => item._id != userInfo.id)
              .reverse()
              .map((user) => (
                <UserItem
                  user={user}
                  currentChat={currentChat}
                  userInfo={userInfo}
                  notifications={notifications}
                  setNotifications={setNotifications}
                  isTyping={isTyping}
                  startChatWith={startChatWith}
                />
              ))
          ) : (
            <>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3171/3171060.png"
                width="45"
                height="45"
                alt=""
              />

              <h3>Avocado Support</h3>
            </>
          )}
        </div>
      </div>
      <div className={styles.right} onClick={() => dispatch(closeChat())}>
        X
      </div>
      {openNotificationBar && (
        <div className={styles.notification}>
          <Notification
            setOpenNotificationBar={setOpenNotificationBar}
            latestMessages={latestMessages}
            setLatestMessages={setLatestMessages}
            startChatWith={startChatWith}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
