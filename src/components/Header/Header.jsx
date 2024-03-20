import Box from "@mui/material/Box";
import { Button, Link } from "@mui/material";
import c from "./index.module.css";
import DialogComponent from "../Dialogs/DialogComponent";

const Header = ({
  handleOpenDialog,
  isPracticeDialogOpen,
  isNewGameDialogOpen,
  handleYesClick,
  handleCloseDialog,
  handleRegularModeClick,
  handleInstantDeathModeClick,
}) => {
  const practiceDialogButtons = [
    { label: "Yes", onClick: () => handleYesClick("practice") },
    { label: "No", onClick: handleCloseDialog },
  ];
  const newGameDialogButtons = [
    { label: "Regular Mode", onClick: () => handleRegularModeClick() },
    {
      label: "Instant Death Mode",
      onClick: () => handleInstantDeathModeClick(),
    },
  ];

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
      <DialogComponent
        isOpen={isPracticeDialogOpen}
        handleClose={handleCloseDialog}
        title="Are you sure you want to enter the practice mode?"
        buttons={practiceDialogButtons}
      />
      <DialogComponent
        isOpen={isNewGameDialogOpen}
        handleClose={handleCloseDialog}
        title={"Which mode do you want to enter?"}
        buttons={newGameDialogButtons}
      />
    </>
  );
};

export default Header;
