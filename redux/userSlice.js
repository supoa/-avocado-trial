import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: Cookies.get("userInfo")
      ? JSON.parse(Cookies.get("userInfo"))
      : null,

    teamMember: [],
    fetchTeam: true,
    profileInfo: {},
  },
  reducers: {
    login: (state, action) => {
      Cookies.set("userInfo", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    logout: (state) => {
      Cookies.remove("userInfo");
      state.userInfo = null;
    },
    setTeamMember: (state, action) => {
      state.teamMember = action.payload;
    },

    setFetchTeam: (state) => {
      state.fetchTeam = !state.fetchTeam;
    },
    setProfileInfo: (state, action) => {
      state.profileInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, setTeamMember, setFetchTeam, setProfileInfo } =
  userSlice.actions;

export default userSlice.reducer;
