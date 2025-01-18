import { LogIn, Server } from 'lucide-react'
import { useCookies } from 'react-cookie'
import { Link, useLocation } from 'react-router-dom'
import LogoUA3D from './LogoUA3D'
import NavBarAvatar from './NavBarAvatar'
import NavBarMenu from './NavBarMenu'
import ThemeModeToggle from './ThemeModeToggle'
import { LogoLab } from './logo-lab'
import { LogoLabe } from './logo-labe'
import { LogoZogui } from './logo-zogui'

export const NavBar = () => {
  const [cookies] = useCookies(['user'])
  const location = useLocation()

  return (
    <nav className="flex w-full items-center justify-between bg-primary-foreground shadow-sm">
      {location.pathname.includes('laboratorio-iot') ? (
        <LogoLab />
      ) : location.pathname.includes('zogui') ? (
        <LogoZogui />
      ) : location.pathname.includes('labe') ? (
        <LogoLabe />
      ) : (
        <LogoUA3D />
      )}
      <div className="flex items-center gap-5">
        <NavBarMenu />
        <ThemeModeToggle />
        {cookies.user?.username ? (
          <>
            <Link
              className="border-1 flex flex-row items-center rounded-lg p-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              to="/server"
            >
              <Server />
            </Link>
            <NavBarAvatar user={cookies.user} />
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
