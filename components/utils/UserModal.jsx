import React from "react";
import styles from "../../styles/UserModal.module.css";
import Image from "next/Image";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { setFetchTeam } from "../../redux/userSlice";
import { getLevels } from "../../utils/test/test";
const UserModal = ({ user, setCurrentUser }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector((state) => state.user.userInfo);
  const teamMember = useSelector((state) => state.user.teamMember);
  const handleUpdateTeam = async (reference) => {
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
      resp.statusText == "OK" && setCurrentUser(false);
      dispatch(setFetchTeam());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.user__modal}>
      <div className={styles.user__pic}>
        <Image
          src={
            user.picture
              ? user.picture
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          width="200px"
          height="200px"
          alt={user.name}
        />
      </div>
      <div className={styles.user__bio}>
        {" "}
        <div className={styles.name}>{user.name}</div>
        <div className={styles.email}>{user.email}</div>
        <div className={styles.country}>{user.country}</div>
        <div className={styles.cancel} onClick={() => setCurrentUser(null)}>
          X
        </div>
        {userInfo.isAdmin &&
          getLevels(teamMember.user)[1].find(
            (item) => item._id == user._id
          ) && (
            <div
              className={styles.remove}
              onClick={() => handleUpdateTeam(user._id)}
            >
              -
            </div>
          )}
      </div>
    </div>
  );
};

export default UserModal;
