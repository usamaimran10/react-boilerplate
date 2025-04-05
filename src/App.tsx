import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Home />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
