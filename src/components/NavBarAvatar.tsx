import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { initialsUsername, isAdmin } from '@/lib/utils'
import { User as UserType } from '@/models'
import { resetUser } from '@/redux/states'
import { LogOut, SlidersVertical, User } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export interface NavBarAvatarProps {
  user: UserType
}

export const NavBarAvatar = ({ user }: NavBarAvatarProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="mr-20 cursor-pointer">
          <Avatar>
            <AvatarImage src={''} alt="Avatar" />
            <AvatarFallback>{initialsUsername(user.username)}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/profile')}>
          <User className="mr-2 h-4 w-4" />
          <span>Cuenta</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {isAdmin(user) && (
          <>
            <DropdownMenuItem onClick={() => navigate('/dashboard')}>
              <SlidersVertical className="mr-2 h-4 w-4" />
              <span>Panel de Control</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={() => dispatch(resetUser())}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar Sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavBarAvatar
