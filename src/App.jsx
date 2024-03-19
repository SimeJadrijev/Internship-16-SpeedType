import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <MainPage />
      </StyledEngineProvider>
    </>
  );
}

export default App;
