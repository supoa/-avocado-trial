import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Layout.module.css";
import { useEffect } from "react";
import { setActiveUsers, setSocket } from "../redux/socketSlice";
const ENDPOINT = "http://localhost:4000";
import { useSnackbar } from "notistack";
import { setCurrentChat, setFetchAgain } from "../redux/ChatSlice";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "./Support/ChatBox";
import axios from "axios";
import { useRouter } from "next/router";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={25}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "black" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={25}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const Layout = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const currentChat = useSelector((state) => state.chat.currentChat);
  const [laoding, setLoading] = useState(false);
  const startChatWithAdmin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/chat",
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setLoading(false);
      dispatch(setCurrentChat(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      {children}

      <Footer />

      {router.asPath != "/support" && (
        <>
          {userInfo && (
            <div
              className={styles.chat__icon}
              onClick={() => {
                startChatWithAdmin();
              }}
            >
              {laoding ? <FacebookCircularProgress /> : <ChatIcon />}
            </div>
          )}
        </>
      )}

      {currentChat && <ChatBox />}
    </>
  );
};

export default Layout;
