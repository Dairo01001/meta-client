import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMe } from "../services";
import { UserProfile } from "../models";

export const useUserMe = () => {
  const user = useSelector((state: AppStore) => state.user);
  const [me, setMe] = useState<UserProfile | null>(null);

  useEffect(() => {
    getMe(user).then(setMe);
  }, [user]);

  return { me };
};
