import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  Slide,
} from "@mui/material";
import { useState, useEffect } from "react";
import DialogComponent from "../DialogComponent";

const NewGameDialog = ({ isOpen, setIsOpen, handleRegularModeClick }) => {
  const handleRegularModeClick = () => {
    setIsOpen(false);
    openRegularModePage();
  };

  const handleInstantDeathModeClick = () => {
    setIsOpen(false);
    openInstantDeathModePage();
  };
  const buttons = [
    { label: "Regular Mode", onClick: () => handleRegularModeClick() },
    {
      label: "Instant Death Mode",
      onClick: () => handleInstantDeathModeClick(),
    },
  ];
  return (
    <DialogComponent
      isOpen={isOpen}
      handleClose={() => setIsOpen(false)}
      title="Which mode do you want to enter?"
      buttons={buttons}
    />
  );
};

export default NewGameDialog;
