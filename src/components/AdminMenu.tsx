import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { User } from "lucide-react";

export const AdminMenu = () => {
  return (
    <div className="p-4 overflow-y-auto w-80 shadow-xl">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} to="/profile">
              <User className="mr-2 h-4 w-4" />
              Cuenta
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AdminMenu;
