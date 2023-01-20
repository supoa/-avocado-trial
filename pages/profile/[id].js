import React, { useEffect } from "react";
import ProfileInfo from "../../components/ProfileInfo";
import styles from "../../styles/Profile.module.css";
import ProfilePost from "../../components/ProfiePost";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Tree from "../../components/utils/Tree";
import UserTree from "../../components/UserTree";
import OrgChart from "../../components/OrgChart";
import Breadth from "../../components/utils/Breadth";

// const user = {
//   _id: "63394733e01b1911c0dbb1ca",
//   name: "user-normal",
//   picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//   teamMembers: [
//     {
//       picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//       teamMembers: [],
//       _id: "6337a7cf83e9cea09a1e1983",
//       name: "sohan",
//       email: "sohanur01744@gmail.com",
//       country: "bd",
//     },
//     {
//       _id: "633d3d73fe0b7a69bedbee39",
//       name: "user-socket",
//       email: "user-socket@gmail.com",
//       picture:
//         "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
//       country: "532",
//       teamMembers: [
//         {
//           _id: "6337fa8d61a0d3ec94bee6f0",
//           name: "5730",
//           email: "3wo83@gmail.com",
//           country: "123",
//           picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//           teamMembers: [
//             {
//               _id: "633d3d73fe0b7a69bedbee39",
//               name: "user-socket",
//               email: "user-socket@gmail.com",
//               picture:
//                 "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
//               country: "532",
//               teamMembers: [
//                 {
//                   _id: "6337fa8d61a0d3ec94bee6f0",
//                   name: "5730",
//                   email: "3wo83@gmail.com",
//                   country: "123",
//                   picture:
//                     "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//                 },
//                 {
//                   picture:
//                     "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//                   _id: "6337822a7ad031aaa186b703",
//                   name: "mark40",
//                   email: "mark40@gmail.com",
//                   country: "123",
//                 },
//                 {
//                   picture:
//                     "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//                   _id: "6337020dcf4ebd008d0432a5",
//                   name: "testuser 3",
//                   email: "testuser3@gmail.com",
//                   country: "123",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//           teamMembers: [],
//           _id: "6337822a7ad031aaa186b703",
//           name: "mark40",
//           email: "mark40@gmail.com",
//           country: "123",
//         },
//         {
//           picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//           teamMembers: [],
//           _id: "6337020dcf4ebd008d0432a5",
//           name: "testuser 3",
//           email: "testuser3@gmail.com",
//           country: "123",
//         },
//       ],
//     },
//     {
//       teamMembers: [],
//       _id: "633979e1e01b1911c0dbb36a",
//       name: " anewuser",
//       email: "anewuser@gmail.com",
//       picture:
//         "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fapp.webp?alt=media&token=428e7e26-3dec-4898-91e5-2eff8fe59762",
//       country: "1421",
//     },
//     {
//       _id: "6337fa8d61a0d3ec94bee6f0",
//       name: "5730",
//       email: "3wo83@gmail.com",
//       country: "123",
//       picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//       teamMembers: [
//         {
//           _id: "633d3d73fe0b7a69bedbee39",
//           name: "user-socket",
//           email: "user-socket@gmail.com",
//           picture:
//             "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
//           country: "532",
//           teamMembers: [
//             {
//               _id: "6337fa8d61a0d3ec94bee6f0",
//               name: "5730",
//               email: "3wo83@gmail.com",
//               country: "123",
//               picture:
//                 "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//               teamMembers: [
//                 {
//                   _id: "633d3d73fe0b7a69bedbee39",
//                   name: "user-socket",
//                   email: "user-socket@gmail.com",
//                   picture:
//                     "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
//                   country: "532",
//                 },
//               ],
//             },
//             {
//               picture:
//                 "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//               teamMembers: [],
//               _id: "6337822a7ad031aaa186b703",
//               name: "mark40",
//               email: "mark40@gmail.com",
//               country: "123",
//             },
//             {
//               picture:
//                 "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
//               teamMembers: [],
//               _id: "6337020dcf4ebd008d0432a5",
//               name: "testuser 3",
//               email: "testuser3@gmail.com",
//               country: "123",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       _id: "63c6af644980b2a0d2957879",
//       name: "sohan",
//       email: "sohan534dgedge6@gmail.com",
//       picture: "",
//       country: "bd",
//       teamMembers: [],
//     },
//   ],
// };

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const router = useRouter();
  const teamMember = useSelector((state) => state.user.teamMember);

  console.log({ router });

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
      {userInfo?.isAdmin && <Breadth user={teamMember} />}
      {userInfo?.isAdmin && (
        <>
          <UserTree user={teamMember.user} />
        </>
      )}
      <ProfilePost userInfo={userInfo} />
    </div>
  );
};

export default Profile;
