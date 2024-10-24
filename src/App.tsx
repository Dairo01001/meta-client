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
import { About, Home } from './pages'
import store from './redux/store'

axios.defaults.baseURL = 'http://localhost:3001'

const Login = lazy(() => import('@/pages/Login/Login'))
const Profile = lazy(() => import('@/pages/Profile/Profile'))
const Server = lazy(() => import('@/pages/Server/Server'))

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
              <Route element={<AdminLayout />}>
                <Route element={<AdminGuard />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ThemeProvider>
  )
}

export default App
