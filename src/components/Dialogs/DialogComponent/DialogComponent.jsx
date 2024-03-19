import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const DialogComponent = ({ isOpen, handleClose, title, buttons }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      keepMounted
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgba(100, 102, 105, 0.9)",
          color: "white",
        },
        "& .MuiTypography-root": { borderBottom: 0 },
      }}
    >
      <DialogTitle color={"#e2b714"}>{title}</DialogTitle>
      <DialogActions
        sx={{
          "& .MuiButtonBase-root": {
            color: "#e2b714",
            backgroundColor: "rgba(100, 102, 105, 0.9)",
            "&:hover": {
              backgroundColor: "#e2b714",
              color: "black",
            },
          },
        }}
      >
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
