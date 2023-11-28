import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeContextProvider } from "./context/themeContext";

import AppProvider from "./AppProvider";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ThemeContextProvider></ThemeContextProvider>
      </AppProvider>
    </div>
  );
}

export default App;
