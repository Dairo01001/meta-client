import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AdminGuard,
  AdminLayout,
  PublicLayout,
  ThemeProvider
} from './components'
import { About, Faculty, Home, Rol, ServerStatus } from './pages'
import store from './redux/store'

axios.defaults.baseURL = 'http://localhost:3001'

const Login = lazy(() => import('@/pages/Login/Login'))
const Profile = lazy(() => import('@/pages/Profile/Profile'))
const Server = lazy(() => import('@/pages/Server/Server'))

const App = () => {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <BrowserRouter>
              <Routes>
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/server" element={<Server />} />
                </Route>
                <Route element={<AdminGuard />}>
                  <Route element={<AdminLayout />}>
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/rol" element={<Rol />} />
                    <Route path="/server-status" element={<ServerStatus />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
