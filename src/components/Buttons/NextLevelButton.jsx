import { Button } from "@mui/material";
import c from "./index.module.css";

const NextLevelButton = ({ updateLevel, gameLevel, gamePhase }) => {
  const handleClick = () => {
    updateLevel(gameLevel + 1);
  };

  return (
    <>
      <Button
        className={c.nextLevelButton}
        disabled={gamePhase !== 2}
        variant="contained"
        onClick={handleClick}
      >
        Next level
      </Button>
    </>
  );
};

export default NextLevelButton;
