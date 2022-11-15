import React from "react";
import styles from "../../styles/Support/ChatBox.module.css";
import Header from "./Header";
import Input from "./Input";
import Messages from "./Messages";
import { io } from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setFetchAgain } from "../../redux/ChatSlice";
import { setSocket } from "../../redux/socketSlice";
import axios from "axios";
import { motion } from "framer-motion";
// const ENDPOINT = "http://localhost:4000";
const ENDPOINT = "https://socket-o-2.herokuapp.com";
import { useRouter } from "next/router";

const socket = io(ENDPOINT);
const ChatBox = () => {
  const dispatch = useDispatch();
  const [socketConnected, setSocketConnected] = useState(null);
  const userInfo = useSelector((state) => state.user.userInfo);
  const currentChat = useSelector((state) => state.chat.currentChat);
  const [isTyping, setIsTyping] = useState(null);
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  console.log({ notifications });
  const [messages, setMessages] = useState([]);
  const [latestMessages, setLatestMessages] = useState([]);
  const fetchAgain = useSelector((state) => state.chat.fetchAgain);
  useEffect(() => {
    socket.emit("setup", userInfo);
    socket.on("connected", () => setSocketConnected(true));
    dispatch(setSocket(socket));

    socket.on("message recieved", (newMessage) => {
      console.log({ newMessage });
      dispatch(setFetchAgain());
      // if (currentChat._id != newMessage.chat._id) {
      setNotifications((prev) => [newMessage, ...prev]);
      // }
    });

    socket.on("typing", (data) => {
      console.log("typing");
      setIsTyping(data);
    });

    socket.on("stop typing", (data) => {
      setIsTyping(null);
    });
  }, []);

  useEffect(() => {
    socketConnected && socket.emit("join chat", currentChat._id);
  }, [currentChat]);

  const fetchLatestMessage = async () => {
    try {
      const { data } = await axios.get("/api/message", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setLatestMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo.isAdmin && fetchLatestMessage();
  }, [fetchAgain]);

  // useEffect(() => {

  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 1000 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.3 },
      }}
      className={styles.wrapper}
    >
      {socketConnected && (
        <>
          <Header
            userInfo={userInfo}
            socket={socket}
            notifications={notifications}
            setNotifications={setNotifications}
            isTyping={isTyping}
            latestMessages={latestMessages}
            setLatestMessages={setLatestMessages}
          />
          <Messages
            userInfo={userInfo}
            socket={socket}
            isTyping={isTyping}
            messages={messages}
            setMessages={setMessages}
          />
          <Input
            userInfo={userInfo}
            socket={socket}
            messages={messages}
            setMessages={setMessages}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
          />
        </>
      )}
    </motion.div>
  );
};

export default ChatBox;
