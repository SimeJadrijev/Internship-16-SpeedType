import Header from "../../components/Header";
import DialogComponent from "../../components/Dialogs/DialogComponent";
import { useState } from "react";
import PracticePage from "../PracticePage";
import RegularModePage from "../RegularModePage";
import InstantDeathModePage from "../InstantDeathModePage";

const MainPage = () => {
  const [isPracticeDialogOpen, setIsPracticeDialogOpen] = useState(false);
  const [isPracticePageOpen, setIsPracticePageOpen] = useState(false);
  const [isNewGameDialogOpen, setIsNewGameDialogOpen] = useState(false);
  const [isRegularModePageOpen, setIsRegularModePageOpen] = useState(false);
  const [IsInstantDeathModeOpen, setIsInstantDeathModeOpen] = useState(false);

  const handleOpenDialog = (dialogType) => {
    if (dialogType === "practice") setIsPracticeDialogOpen(true);
    else if (dialogType === "newGame") setIsNewGameDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsPracticeDialogOpen(false);
    setIsNewGameDialogOpen(false);
  };

  const handleYesClick = (dialogType) => {
    if (dialogType === "practice") {
      //mozda maknit ovaj dio kasnije ako ne bude ne potreban, ostavit samo bez ifa
      setIsPracticeDialogOpen(false);
      setIsPracticePageOpen(true);
    }
  };

  const handleRegularModeClick = () => {
    setIsNewGameDialogOpen(false);
    setIsPracticePageOpen(false);
    setIsInstantDeathModeOpen(false);
    setIsRegularModePageOpen(true);
  };

  const handleInstantDeathModeClick = () => {
    setIsNewGameDialogOpen(false);
    setIsRegularModePageOpen(false);
    setIsPracticePageOpen(false);
    setIsInstantDeathModeOpen(true);
  };

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
      {isRegularModePageOpen && <RegularModePage />}
      {IsInstantDeathModeOpen && <InstantDeathModePage />}
    </>
  );
};

export default MainPage;
