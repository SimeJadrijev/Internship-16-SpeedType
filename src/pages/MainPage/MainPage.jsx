import Header from "../../components/Header";
import DialogComponent from "../../components/Dialogs/DialogComponent";
import { useState } from "react";
import PracticePage from "../PracticePage";

const MainPage = () => {
  const [isPracticeDialogOpen, setIsPracticeDialogOpen] = useState(false);
  const [isPracticePageOpen, setIsPracticePageOpen] = useState(false);
  const [isNewGameDialogOpen, setIsNewGameDialogOpen] = useState(false);

  const handleOpenDialog = (dialogType) => {
    if (dialogType === "practice") {
      setIsPracticeDialogOpen(true);
    } else if (dialogType === "newGame") {
      setIsNewGameDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setIsPracticeDialogOpen(false);
    setIsNewGameDialogOpen(false);
  };

  const handleYesClick = (dialogType) => {
    if (dialogType === "practice") {
      setIsPracticeDialogOpen(false);
      setIsPracticePageOpen(true);
    } else if (dialogType === "newGame") {
      setIsNewGameDialogOpen(false);
    }
  };

  const practiceDialogButtons = [
    { label: "Yes", onClick: () => handleYesClick("practice") },
    { label: "No", onClick: handleCloseDialog },
  ];
  const newGameDialogButtons = [
    { label: "Regular Mode", onClick: () => handleYesClick("newGame") },
    { label: "Instant Death Mode", onClick: handleCloseDialog },
  ];

  return (
    <>
      <Header handleOpenDialog={handleOpenDialog} />
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
      {isPracticePageOpen && <PracticePage />}
    </>
  );
};

export default MainPage;
