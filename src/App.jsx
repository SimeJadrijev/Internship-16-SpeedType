import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
      </StyledEngineProvider>
    </>
  );
}

export default App;
