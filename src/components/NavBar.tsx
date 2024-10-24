import { AppStore } from '@/redux/store'
import { LogIn, Server } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import NavBarAvatar from './NavBarAvatar'
import NavBarMenu from './NavBarMenu'
import ThemeModeToggle from './ThemeModeToggle'

export const NavBar = () => {
  const user = useSelector((state: AppStore) => state.user)

  return (
    <nav className="flex h-20 w-full items-center justify-between shadow-sm">
      <Logo />
      <div className="flex items-center gap-5">
        <NavBarMenu />
        <ThemeModeToggle />
        {user.username ? (
          <>
            <Link
              className="border-1 flex flex-row items-center rounded-lg p-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              to="/server"
            >
              <Server />
            </Link>
            <NavBarAvatar user={user} />
          </>
        ) : (
          <div className="mr-20">
            <Link
              className="border-1 flex flex-row items-center rounded-lg p-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              to="/login"
            >
              <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
