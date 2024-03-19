import Box from "@mui/material/Box";
import { Button, Link } from "@mui/material";
import c from "./index.module.css";

const Header = ({ handleOpenDialog }) => {
  return (
    <>
      <Box className={c.headerContainer}>
        <Link>dumptype</Link>
        <div className={c.headerButtons}>
          <Button variant="text" onClick={() => handleOpenDialog("practice")}>
            PRACTICE
          </Button>
          <Button variant="text" onClick={() => handleOpenDialog("newGame")}>
            NEW GAME
          </Button>
        </div>
        <div className={c.headerStats}>
          <p>
            WPM: <span>98</span>
          </p>
          <p>
            Level: <span>3</span>
          </p>
        </div>
      </Box>
    </>
  );
};

export default Header;
