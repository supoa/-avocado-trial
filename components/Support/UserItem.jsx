import Image from "next/image";
import React, { useRef } from "react";
import styles from "../../styles/Support/UserItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentChat } from "../../redux/ChatSlice";
import { useRouter } from "next/router";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useEffect } from "react";
import Typing from "./Typing";

const UserItem = ({
  user,
  currentChat,
  userInfo,
  notifications,
  setNotifications,
  isTyping,
  startChatWith,
}) => {
  const dispatch = useDispatch();
  const activeUsers = useSelector((state) => state.socket.activeUsers);
  const socket = useSelector((state) => state.socket.socket);
  const router = useRouter();
  const messagesEndRef = useRef(null);
  const existed = notifications?.find((item) => item.sender._id == user._id);

  // const startChatWith = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "/api/chat/admin",
  //       {
  //         userId: user._id,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userInfo.token}`,
  //         },
  //       }
  //     );
  //     setNotifications(
  //       notifications.filter((item) => item.sender._id != user._id)
  //     );
  //     dispatch(setCurrentChat(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div
      className={styles.wrapper}
      style={
        currentChat.users.find((item) => item._id == user._id)
          ? { color: "black", background: "white" }
          : {}
      }
      onClick={() => startChatWith(user)}
    >
      <div className={styles.picture}>
        <Image
          src={user.picture}
          width={30}
          height={30}
          borderRadius="50%"
          alt=""
        />
      </div>
      <div className={styles.name}>{user.name}</div>
      {existed && existed.chat._id != currentChat._id && (
        <>
          {" "}
          <div className={styles.new__message}>
            <MailOutlineIcon />
          </div>
          <div ref={messagesEndRef} />
        </>
      )}
      {isTyping?.sender == user._id && (
        <div className={styles.typing}>
          {" "}
          <div className={styles.typing__dot}></div>
        </div>
      )}
    </div>
  );
};

export default UserItem;
