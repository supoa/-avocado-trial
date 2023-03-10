import axios from "axios";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFetchAgain } from "../../redux/ChatSlice";
import styles from "../../styles/Support/Messages.module.css";
import Text from "./Text";
import Typing from "./Typing";

const Messages = ({ socket, isTyping, messages, setMessages }) => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  const userInfo = useSelector((state) => state.user.userInfo);
  const fetchAgain = useSelector((state) => state.chat.fetchAgain);
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();

  console.log({ isTyping });

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log("working");
  }, [messages.length]);

  const fetch = async () => {
    try {
      const { data } = await axios.get(`/api/message/${currentChat._id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setMessages(data);
      scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [fetchAgain, currentChat]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("message recieved", (newMessagesRecieved) => {
  //       console.log({ newMessagesRecieved });
  //       fetch();
  //     });
  //   }
  // });

  useEffect(() => {
    isTyping && scrollToBottom();
  });

  const handleDeleteConversation = async () => {
    const { data } = await axios.delete(
      `/api/chat/admin?chat=${currentChat._id}`,

      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    socket.emit("message recieved");
    dispatch(setFetchAgain());
  };

  return (
    <div className={styles.wrapper}>
      {messages.length > 0 ? (
        messages.map((msg) => <Text msg={msg} userInfo={userInfo} />)
      ) : (
        <div className={styles.image__container}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1126/1126612.png"
            width="250"
            height="280"
            alt=""
          />
        </div>
      )}
      {isTyping?.chat == currentChat._id && <Typing />}
      <div ref={messagesEndRef} />
      {messages.length > 0 && (
        <>
          {" "}
          {userInfo.isAdmin && (
            <div
              className={styles.delete__icon}
              onClick={() => {
                handleDeleteConversation();
              }}
            >
              Delete Chat
            </div>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Messages;
