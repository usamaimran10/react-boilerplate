import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
