import { Button } from "@mui/material";
import c from "./index.module.css";

const ResetButton = ({ updateLevel }) => {
  const handleClick = () => {
    updateLevel(1);
  };
  return (
    <>
      <Button className={c.nextLevelButton} onClick={handleClick}>
        Reset
      </Button>
    </>
  );
};

export default ResetButton;
