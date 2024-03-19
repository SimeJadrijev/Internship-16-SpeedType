import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  Slide,
} from "@mui/material";
import { useState, useEffect } from "react";

const NewGameDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} keepMounted>
      <DialogTitle>Which mode do you want to enter?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Regular Mode</Button>
        <Button onClick={handleClose}>Instant Death Mode</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGameDialog;
