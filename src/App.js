import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeContextProvider } from "./context/themeContext";

import AppProvider from "./AppProvider";

import RedirectAuthorized from "./components/auth/redirect-authorized";
import AuthRequired from "./components/auth/auth-required";

import Toaster from "./components/base/toaster";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ThemeContextProvider>
          <Toaster />
        </ThemeContextProvider>
      </AppProvider>
    </div>
  );
}

export default App;
