import { User } from "@/models";
import { IProfile, UserProfile } from "../models";
import axios from "axios";

export const getMe = async (user: User): Promise<UserProfile> => {
  return (
    await axios.get("/api/users/me", {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    })
  ).data;
};


export const upsertMe = async (accessToken: string, profile: Omit<IProfile, "id">): Promise<IProfile> => {
  return (
    await axios.patch("/api/profiles", profile, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  ).data;
};
