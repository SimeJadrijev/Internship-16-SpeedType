import Header from "../../components/Header";
import PracticeDialog from "../../components/Dialogs/PracticeDialog";
import { useState } from "react";
import PracticePage from "../PracticePage";

const MainPage = () => {
  const [practiceDialogOpen, setIsPracticeDialogOpen] = useState(false);
  const [isPracticePageOpen, setIsPracticePageOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsPracticeDialogOpen(true);
  };

  const openPracticePage = () => {
    setIsPracticePageOpen(true);
  };

  return (
    <>
      <Header handleOpenDialog={handleOpenDialog} />
      <PracticeDialog
        isOpen={practiceDialogOpen}
        setIsOpen={setIsPracticeDialogOpen}
        openPracticePage={openPracticePage}
      />
      {isPracticePageOpen && <PracticePage />}
    </>
  );
};

export default MainPage;
