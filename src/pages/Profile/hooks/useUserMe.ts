import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../models";
import { getMe } from "../services";

export const useUserMe = () => {
  const user = useSelector((state: AppStore) => state.user);
  const [me, setMe] = useState<User | null>(null);

  useEffect(() => {
    getMe(user).then(setMe);
  }, [user]);

  return { me };
};
