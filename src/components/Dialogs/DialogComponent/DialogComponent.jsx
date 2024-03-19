import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const DialogComponent = ({ isOpen, handleClose, title, buttons }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} keepMounted>
      <DialogTitle color={"black"}>{title}</DialogTitle>
      <DialogActions>
        {buttons.map((button, index) => (
          <Button key={index} onClick={button.onClick}>
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};
export default DialogComponent;
