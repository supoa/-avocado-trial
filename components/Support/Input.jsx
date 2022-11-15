import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFetchAgain } from "../../redux/ChatSlice";
import styles from "../../styles/Support/Input.module.css";
import CryptoJS from "crypto-js";
import Image from "next/image";
import { useEffect } from "react";

const secretKey = "btc";

const Input = ({ socket, messages, setMessages, setIsTyping, isTyping }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const currentChat = useSelector((state) => state.chat.currentChat);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [typing, setTyping] = useState(false);

  const sendMessage = async () => {
    try {
      if (!text) return;
      const textToSend = CryptoJS.AES.encrypt(text, secretKey).toString();
      setText("");

      setMessages((prev) => [
        ...prev,
        {
          text: textToSend,
          sender: userInfo,
          chat: currentChat._id,
        },
      ]);

      const { data } = await axios.post(
        "/api/message",
        {
          chatId: currentChat._id,
          text: textToSend,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      setText("");
      socket.emit("stop typing", {
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
        chat: currentChat._id,
        sender: userInfo._id,
      });
      setTyping(false);
      socket.emit("new message", {
        ...data,
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
      });

      console.log({ data });

      dispatch(setFetchAgain());
      const adminMsg = [
        "Thanks for texting us ❤️",
        "We will get back to you soon",
      ];

      //generate messaage by admin
      if (messages.length < 1 && !data.sender.isAdmin) {
        adminMsg.forEach((item) => {
          setIsTyping({
            sender: currentChat.users.find((item) => item._id != userInfo._id)
              ._id,
            chat: currentChat._id,
            reciever: userInfo._id,
          });

          sendMessageByAdmin(item);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTyping = (e) => {
    setText(e.target.value);

    if (!socket) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", {
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
        chat: currentChat._id,
        sender: userInfo._id,
      });
    }

    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;

    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", {
          reciever: currentChat.users.find((item) => item._id != userInfo._id)
            ._id,
          chat: currentChat._id,
          sender: userInfo._id,
        });
        setTyping(false);
      }
    }, timerLength);
  };

  const sendMessageByAdmin = async (adminText) => {
    try {
      if (!adminText) return;
      const textToSend = CryptoJS.AES.encrypt(adminText, secretKey).toString();

      const { data } = await axios.post(
        `/api/message/${currentChat._id}`,
        {
          text: textToSend,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      setIsTyping(null);

      socket.emit("new message", {
        ...data,
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
      });

      dispatch(setFetchAgain());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setText("");
  }, [currentChat]);

  return (
    <div className={styles.wrapper}>
      <textarea
        type="text"
        className={styles.field}
        value={text}
        onChange={(e) => handleTyping(e)}
      ></textarea>
      <div className={styles.btn} onClick={() => sendMessage()}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3161/3161392.png"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  );
};

export default Input;
