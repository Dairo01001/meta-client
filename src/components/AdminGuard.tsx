import { isAdmin } from "@/lib/utils";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AdminGuard = () => {
  const user = useSelector((state: AppStore) => state.user);

  return isAdmin(user) ? <Outlet /> : <Navigate to="/" />;
};

export default AdminGuard;
