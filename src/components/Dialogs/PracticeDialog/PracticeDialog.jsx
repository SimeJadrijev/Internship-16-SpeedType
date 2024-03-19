import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const PracticeDialog = ({ isOpen, setIsOpen, openPracticePage }) => {
  const handleYesClick = () => {
    setIsOpen(false);
    openPracticePage();
  };
  return (
    <Dialog open={isOpen}>
      <DialogTitle color={"black"}>
        Are you sure you want to enter the practice mode?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleYesClick}>Yes</Button>
        <Button onClick={() => setIsOpen(false)}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PracticeDialog;
