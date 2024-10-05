import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavBarAvatar from "./NavBarAvatar";
import NavBarMenu from "./NavBarMenu";
import ThemeModeToggle from "./ThemeModeToggle";
import { LogIn, Server } from "lucide-react";
import { AppStore } from "@/redux/store";
import { Link } from "react-router-dom";
import { isAdmin } from "@/lib/utils";

export const NavBar = () => {
  const user = useSelector((state: AppStore) => state.user);

  return (
    <nav className="flex items-center justify-between w-full h-20 shadow-sm">
      <Logo />
      <div className="flex items-center gap-5">
        <NavBarMenu />
        <ThemeModeToggle />
        {user.username ? (
          <>
            {isAdmin(user) && (
              <Link
                className="flex flex-row items-center shadow-sm p-4 rounded-lg border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                to="/server"
              >
                <Server />
              </Link>
            )}
            <NavBarAvatar user={user} />
          </>
        ) : (
          <div className="mr-20">
            <Link
              className="flex flex-row items-center shadow-sm p-4 rounded-lg border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              to="/login"
            >
              <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
