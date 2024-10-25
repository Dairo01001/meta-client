import { User } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'

export const AdminMenu = () => {
  return (
    <div className="w-80 overflow-y-auto p-4 shadow-xl">
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
  )
}

export default AdminMenu
