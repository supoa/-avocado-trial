import React, { useEffect } from "react";
import ProfileInfo from "../../components/ProfileInfo";
import styles from "../../styles/Profile.module.css";
import ProfilePost from "../../components/ProfiePost";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import UserTree from "../../components/utils/UserTree";
import Breadth from "../../components/utils/Breadth";
import UserVerticalTree from "../../components/utils/UserVerticalTree";
import TeamMember from "../../components/Team/TeamMember";

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const profileInfo = useSelector((state) => state.user.profileInfo);
  const router = useRouter();
  const teamMember = useSelector((state) => state.user.teamMember);

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <ProfileInfo userInfo={userInfo} />

      {(new Date(profileInfo.createdAt) >
        new Date("2023-01-20T15:44:00.024Z") ||
        userInfo?.isAdmin) && <TeamMember user={teamMember.user} />}
      <ProfilePost userInfo={userInfo} />
    </div>
  );
};

export default Profile;
