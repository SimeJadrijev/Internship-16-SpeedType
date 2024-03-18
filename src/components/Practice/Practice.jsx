import { TextField } from "@mui/material";
import c from "./index.module.css";
import TypingBox from "../TypingBox";

const Practice = () => {
  return (
    <>
      <h2>Practice Mode</h2>
      <h3>
        Words: <span>20</span>
      </h3>
      <TypingBox />
    </>
  );
};

export default Practice;
