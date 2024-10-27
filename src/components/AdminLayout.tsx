import { useAppSelector } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { AppSidebar } from './app-sidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import { Toaster } from './ui/toaster'

export const AdminLayout = () => {
  const user = useAppSelector(state => state.user)

  if (!user.id) return <Navigate to="/login" />

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-2">
        <SidebarTrigger />
        <div className="flex h-full w-full items-center justify-center p-10">
          <Outlet />
        </div>
        <Toaster />
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout
