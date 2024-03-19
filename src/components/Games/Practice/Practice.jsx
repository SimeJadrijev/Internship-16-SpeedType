import { TextField } from "@mui/material";
import c from "./index.module.css";
import TypingBox from "../../TypingBox";
import { useState, useRef, useEffect } from "react";

const Practice = () => {
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  const countWords = (e) => {
    const text = e.target.value;
    const words = text.split(/\b/).filter((word) => word.trim().length > 0);

    setWordCount(words.length);
  };

  useEffect(() => {
    const body = document.body;

    const handleKeyPress = () => {
      textareaRef.current.focus();
    };

    body.addEventListener("keypress", handleKeyPress);
    return () => {
      body.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      <h2>Practice Mode</h2>
      <h3>
        Words: <span>{wordCount}</span>
      </h3>
      <TypingBox textareaRef={textareaRef} handleTextareaChange={countWords} />
    </>
  );
};

export default Practice;
