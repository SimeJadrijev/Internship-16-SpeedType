import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  Slide,
} from "@mui/material";
import { useState, useEffect } from "react";
import DialogComponent from "../DialogComponent";

const NewGameDialog = ({ isOpen, handleClose, handleYesClick }) => {
  const buttons = [
    { label: "Regular Mode", onClick: handleYesClick },
    { label: "Instant Death Mode", onClick: handleClose },
  ];
  return (
    <DialogComponent
      isOpen={isOpen}
      handleClose={handleClose}
      title="Which mode do you want to enter?"
      buttons={buttons}
    />
  );
};

export default NewGameDialog;
