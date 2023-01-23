import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
import { breadth } from "../../../utils/structure";
const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  try {
    if (req.query.userId == req.user._id || req.user.isAdmin == true) {
      await db.connect();

      const user = await User.findById(req.query.userId)
        .select("name picture _id")
        .populate({
          path: "teamMembers",
          select: "name picture _id country email",
          populate: {
            path: "teamMembers",
            select: "name picture _id country email",
            populate: {
              path: "teamMembers",
              select: "name picture _id country email",
              populate: {
                path: "teamMembers",
                select: "name picture _id country email",
                populate: {
                  path: "teamMembers",
                  select: "name picture _id country email",
                  populate: {
                    path: "teamMembers",
                    select: "name picture _id country email",
                    populate: {
                      path: "teamMembers",
                      select: "name picture _id country email",
                      populate: {
                        path: "teamMembers",
                        select: "name picture _id country email",
                        populate: {
                          path: "teamMembers",
                          select: "name picture _id country email",
                          populate: {
                            path: "teamMembers",
                            select: "name picture _id country email",
                            populate: {
                              path: "teamMembers",
                              select: "name picture _id country email",
                              populate: {
                                path: "teamMembers",
                                select: "name picture _id country email",
                                populate: {
                                  path: "teamMembers",
                                  select: "name picture _id country email",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const array = [];

      const rowUser = (user) => {
        array.push({ _id: user._id, name: user.name, picture: user.picture });
        user?.teamMembers?.forEach((user) => {
          rowUser(user);
        });
        return array;
      };
      return res.json({ user: user, rowUser: rowUser(user) });
    } else {
      console.log("permission not allowed");
      return res.status(403).json({ message: "Permission not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// set/unset Members
handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const user = await User.findById(req.query.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.teamMembers.push(req.body.teamMemberId);
    await user.save();
    return res.json({ message: "Team member added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

handler.delete(async (req, res) => {
  try {
    await db.connect();

    const user = await User.findById(req.query.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.teamMembers = user.teamMembers.filter(
      (teamMember) => teamMember != req.query.teamMemberId
    );
    await user.save();
    return res.json({ message: "Team member removed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

handler.use(isAuth, isAdmin);
handler.patch(async (req, res) => {
  try {
    await db.connect();
    const user = await User.findById(req.query.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const teamMemberId = req.body.teamMemberId;
    if (user.teamMembers.includes(teamMemberId)) {
      user.teamMembers = user.teamMembers.filter((id) => id != teamMemberId);
      await user.save();
      return res.json({ message: "Team member removed" });
    } else {
      user.teamMembers.push(teamMemberId);
      await user.save();
      return res.json({ message: "Team member added" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
