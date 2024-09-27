import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { RootLayout, ThemeProvider } from "./components";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Suspense fallback={<h1>Loading...</h1>}>
          <BrowserRouter>
            <RootLayout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </RootLayout>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
