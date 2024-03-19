import DialogComponent from "../DialogComponent";

const PracticeDialog = ({ isOpen, setIsOpen, handleYesClick }) => {
  const handleYesClick = () => {
    setIsOpen(false);
    openPracticePage();
  };

  const buttons = [
    { label: "Yes", onClick: () => handleYesClick() },
    { label: "No", onClick: () => setIsOpen(false) },
  ];

  return (
    <DialogComponent
      isOpen={isOpen}
      handleClose={() => setIsOpen(false)}
      title="Are you sure you want to enter the practice mode?"
      buttons={buttons}
    />
  );
};

export default PracticeDialog;
