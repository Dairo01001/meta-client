import React, { lazy, Suspense } from "react";
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from "./pages";
import { RootLayout, ThemeProvider } from "./components";
import store from "./redux/store";

const Login = lazy(() => import("@/pages/Login/Login"));

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <BrowserRouter>
            <RootLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </RootLayout>
          </BrowserRouter>
        </Suspense>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
