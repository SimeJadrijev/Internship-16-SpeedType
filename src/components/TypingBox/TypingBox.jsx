import { useEffect, useRef, useState } from "react";

const TypingBox = ({ textareaRef, handleTextareaChange }) => {
  return (
    <textarea
      ref={textareaRef}
      spellCheck="false"
      onChange={handleTextareaChange}
      placeholder="You can warm up here"
      name=""
      id="myInput"
    ></textarea>
  );
};

export default TypingBox;
