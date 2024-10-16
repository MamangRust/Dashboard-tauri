import { ThemeProvider } from "./components/admin/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { RouterProvider } from "react-router-dom";
import routes from "@/routes"

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
