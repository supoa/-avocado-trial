import React, { useEffect, useState } from "react";
import styles from "../styles/Announcement.module.css";
import { useRouter } from "next/router";
import axios from "axios";
// import notice from "../data/notice";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Announcement = () => {
  const [notice, setNotice] = useState();
  const [content, setContent] = useState("");
  const router = useRouter();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [sent, setSent] = useState(0);
  const fetch = async () => {
    try {
      const { data } = await axios.get("/api/announcement");
      setNotice(data);
      console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ notice });

  const handleNotic = async () => {
    try {
      // first get all the users
      const res = await axios.get("/api/admin/users", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      const users = res.data;

      const { data } = await axios.post(
        "/api/announcement",
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setNotice(data);

      const handleMultipleWithRec = (index) => {
        if (index >= users.length) {
          return;
        }
        const user = users[index];

        axios
          .post("/api/admin/users", {
            content,
            name: user.name,
            email: user.email,
          })
          .then((resp) => {
            setSent((prev) => prev + 1);
            handleMultipleWithRec(index + 1);
          });
      };

      handleMultipleWithRec(0);

      setContent("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, [router.asPath]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      className={styles.wrapper}
    >
      <h1>Announcement</h1>
      {userInfo?.isAdmin && <p>Mail Sent {sent}</p>}
      {notice?.content?.split("#").map((item) => (
        <p style={{ margin: "10px 0" }}>{item}</p>
      ))}
      {userInfo?.isAdmin && (
        <div className={styles.form__container}>
          <input
            type="text"
            className={styles.field}
            placeholder="Announce Notice"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.plus} onClick={() => handleNotic()}>
            +
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Announcement;
