import { lazy, Suspense } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from "./pages";
import {
  AdminGuard,
  AdminLayout,
  RootLayout,
  ThemeProvider,
} from "./components";
import store from "./redux/store";

axios.defaults.baseURL = "http://localhost:3001";

const Login = lazy(() => import("@/pages/Login/Login"));
const Profile = lazy(() => import("@/pages/Profile/Profile"));
const Server = lazy(() => import("@/pages/Server/Server"));

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <BrowserRouter>
            <RootLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route element={<AdminLayout />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route element={<AdminGuard />}>
                    <Route path="/server" element={<Server />} />
                  </Route>
                </Route>
              </Routes>
            </RootLayout>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
