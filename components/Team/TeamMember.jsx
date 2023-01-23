import { current } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFetchTeam, setTeamMember } from "../../redux/userSlice";
import styles from "../../styles/Team/Team.module.css";
import Generation from "./Generation";
import Tree from "./Tree";
import Chain from "./Chain";
import All from "./All";
const TeamMember = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo, teamMember, fetchTeam } = useSelector(
    (state) => state.user
  );
  const [curerntModel, setcurrentModel] = useState("all");

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
      <h3>You With Your Team Memebers</h3>
      <div className={styles.flex}>
        {["all", "generation", "tree", "chain"].map((item) => (
          <div
            className={styles.item}
            onClick={() => setcurrentModel(item)}
            style={
              curerntModel == item
                ? {
                    background: "orange",
                    color: "white",
                  }
                : {}
            }
          >
            {item}
          </div>
        ))}
      </div>
      {teamMember && curerntModel == "all" && (
        <All users={teamMember.rowUser} />
      )}

      {teamMember && curerntModel == "generation" && (
        <Generation user={teamMember.user} />
      )}
      {teamMember && curerntModel == "tree" && <Tree user={teamMember.user} />}
      {teamMember && curerntModel == "chain" && (
        <Chain user={teamMember.user} />
      )}
    </div>
  );
};

export default TeamMember;
