import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export const PublicLayout = () => (
  <div
    style={{
      display: 'grid',
      minHeight: '100vh',
      gridTemplateRows: 'auto 1fr auto'
    }}
  >
    <NavBar />
    <Outlet />
  </div>
)
export default PublicLayout
