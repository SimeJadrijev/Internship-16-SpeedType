import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Practice from "./components/Practice";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        <Practice />
      </StyledEngineProvider>
    </>
  );
}

export default App;
