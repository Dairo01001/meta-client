import { User } from "@/models";
import { UserProfile } from "../models";
import axios from "axios";

export const getMe = async (user: User): Promise<UserProfile> => {
  return (
    await axios.get("/api/users/me", {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    })
  ).data;
};
