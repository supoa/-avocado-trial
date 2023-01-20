import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { storage } from "../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import CircularProgress from "@mui/material/CircularProgress";
import { login, setFetchTeam } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const UpdateTeam = ({
  setOpen,
  userInfo,
  profileData,
  setProfileData,
  fromAdmin,
  setUpdatingTeam,
}) => {
  const router = useRouter();
  const [profile, setProfile] = useState(profileData);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState("");
  const [image, setImage] = useState();
  const [progresspercent, setProgresspercent] = useState(0);
  const dispatch = useDispatch();
  const [reference, setReference] = useState("");

  const handleUpdateTeam = async () => {
    try {
      const resp = await axios.patch(
        `/api/admin/member?userId=${router.query.id}`,
        {
          teamMemberId: reference,
        },
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      console.log(resp);
      resp.statusText == "OK" && setUpdatingTeam(false);
      dispatch(setFetchTeam());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        background: "rgb(0,0,0,0.6)",
        padding: "15px",
        paddingTop: "40px",
        paddingBottom: "50px",
        minWidth: "320px",
        maxHeight: "20vh",
        minHeight: "10vh",
        zIndex: "1000",
      }}
    >
      <h2>Updating Team</h2>
      <form className={styles.form} style={{ maxHeight: "20vh" }}>
        {}

        <input
          type="text"
          placeholder="Refaral Code"
          onChange={(e) => setReference(e.target.value)}
        />
        <div className={styles.flex}>
          {loading || uploading ? (
            <CircularProgress />
          ) : (
            <btn className={styles.btn} onClick={() => handleUpdateTeam()}>
              Update Team
            </btn>
          )}

          <div
            className={styles.btn__cancel}
            onClick={() => setUpdatingTeam(false)}
          >
            Cancel
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTeam;
