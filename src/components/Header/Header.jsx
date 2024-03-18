import Box from "@mui/material/Box";
import { Button, Link } from "@mui/material";
import c from "./index.module.css";

const Header = () => {
  return (
    <>
      <Box className={c.headerContainer}>
        <Link>dumptype</Link>
        <div className={c.headerButtons}>
          <Button variant="text">PRACTICE</Button>
          <Button variant="text">NEW GAME</Button>
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
