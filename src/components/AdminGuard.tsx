import { isAdmin } from '@/lib/utils'
import { useCookies } from 'react-cookie'
import { Navigate, Outlet } from 'react-router-dom'

export const AdminGuard = () => {
  const [cookies] = useCookies(['user'])

  return isAdmin(cookies.user) ? <Outlet /> : <Navigate to="/" />
}

export default AdminGuard
