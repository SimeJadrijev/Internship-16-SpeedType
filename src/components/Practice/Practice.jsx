import { TextField } from "@mui/material";
import c from "./index.module.css";

const Practice = () => {
  return (
    <>
      <h2>Practice Mode</h2>
      <h3>
        Words: <span>20</span>
      </h3>
      <textarea
        placeholder="You can warm up here"
        name=""
        id="myInput"
      ></textarea>
    </>
  );
};

<TextField
  id="outlined-basic"
  label="practice field"
  varient="outlined"
  className={c.practiceInputField}
/>;

export default Practice;
