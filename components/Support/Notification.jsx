import axios from "axios";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Support/Notification.module.css";
import CryptoJS from "crypto-js";
const secretKey = "btc";
const Notification = ({
  setOpenNotificationBar,
  latestMessages,
  setLatestMessages,
  startChatWith,
}) => {
  const userInfo = useSelector((state) => state.user.userInfo);

  const fetchAgain = useSelector((state) => state.chat.fetchAgain);

  const planText = (text) => {
    return CryptoJS.AES.decrypt(text, secretKey).toString(CryptoJS.enc.Utf8);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3>Notification</h3>
        <div
          className={styles.close__icon}
          onClick={() => setOpenNotificationBar(false)}
        >
          X
        </div>
      </div>
      <div className={styles.notifications}>
        {latestMessages &&
          latestMessages.map((item) => (
            <div
              className={styles.notification}
              onClick={() => {
                startChatWith(item.sender);
              }}
            >
              <div className={styles.notification__picture}>
                <Image
                  src={item.sender.picture}
                  width={55}
                  height={55}
                  alt=""
                />
              </div>
              <div className={styles.notification__right}>
                <div className={styles.name}>{item.sender.name}</div>
                <div className={styles.message}>
                  {" "}
                  {planText(item.text).length > 15 ? (
                    <> {planText(item.text).slice(0, 15)}...</>
                  ) : (
                    <> {planText(item.text)}</>
                  )}
                </div>
                <span>{moment(item.createdAt).fromNow()}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notification;
