import { useAppSelector } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { AppSidebar } from './app-sidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'

export const AdminLayout = () => {
  const user = useAppSelector(state => state.user)

  if (!user.id) return <Navigate to="/login" />

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-2">
        <SidebarTrigger />
        <div className="flex h-full w-full justify-center p-10">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout
