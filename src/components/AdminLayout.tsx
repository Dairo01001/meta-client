import { Navigate, Outlet } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export const AdminLayout = () => {
  const user = useSelector((state: AppStore) => state.user);

  if(!user.id) return <Navigate to="/login" />;

  return (
    <div className="flex-grow flex flex-row gap-2">
      <AdminMenu />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
