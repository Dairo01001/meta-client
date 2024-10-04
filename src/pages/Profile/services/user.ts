import { User } from "@/models";
import { User as UserProfile } from "../models";
import axios from "axios";

export const getMe = async (user: User): Promise<UserProfile> => {
  return (
    await axios.get("/api/users/me", {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    })
  ).data;
};
