import Image from "next/image";
import React from "react";
import styles from "../../styles/Breadth.module.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setFetchTeam, setTeamMember } from "../../redux/userSlice";
import { useRouter } from "next/router";

const Breadth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo, teamMember, fetchTeam } = useSelector(
    (state) => state.user
  );

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
      resp.statusText == "OK" && setUpdatingTeam(false);
      dispatch(setFetchTeam());
    } catch (error) {
      console.log(error);
    }
  };

  const fetch = async () => {
    try {
      const { data } = await axios.get(
        `/api/admin/member?userId=${router.query.id}`,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      console.log({ data });
      dispatch(setTeamMember(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, [fetchTeam, router.query.id]);
  return (
    <div className={styles.wrapper}>
      <h3>Team Member {teamMember.rowUser?.length}</h3>
      <div className={styles.flex}>
        {teamMember.rowUser?.map((user) => (
          <div className={styles.member}>
            <div className={styles.pic}>
              <Image
                src={
                  user.picture
                    ? user.picture
                    : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                }
                width="60px"
                height="60px"
                alt={user.name}
              />
            </div>
            <div className={styles.name}>{user.name.split(1, 5)} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadth;
