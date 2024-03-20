import React, { useEffect, useMemo, useRef } from "react";
// import it
import useTypingGame, { CharStateType } from "react-typing-game-hook";
import { getRandomGameText } from "../../../data";
import c from "./index.module.css";

// -------------------------------------------------------------

const TypingGame = ({
  level,
  setGamePhase,
  totalSeconds,
  pauseOnErrorParam,
}) => {
  const randomGameText = useMemo(() => getRandomGameText(level), [level]);
  const h1 = useRef(null);
  // Call the hook
  const {
    states: { chars, charsState, phase },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(randomGameText, {
    skipCurrentWordOnSpace: false,
  });

  useEffect(() => {
    setGamePhase(phase);

    const updateWpm = () => {
      let totalWordsNumber = chars.split(" ").length;
      let wpm = Math.floor(totalWordsNumber / (totalSeconds / 60));
    };
  }, [phase]);

  useEffect(() => {
    if (charsState.includes(2)) console.log("greska!!");
  }, [charsState]);

  useEffect(() => {
    const body = document.body;

    const handleKeyDown = () => {
      h1.current.focus();
    };

    body.addEventListener("keydown", handleKeyDown);
    return () => {
      body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Capture and display!
  return (
    <h1
      ref={h1}
      onKeyDown={(e) => {
        const key = e.key;
        if (key === "Escape") {
          resetTyping();
        } else if (key === "Backspace") {
          deleteTyping(false);
        } else if (key.length === 1) {
          insertTyping(key);
        }
        e.preventDefault();
      }}
      tabIndex={0}
    >
      {chars.split("").map((char, index) => {
        let state = charsState[index];
        let color =
          state === 0 ? "rgb(100, 102, 105)" : state === 1 ? "white" : "red";
        return (
          <span key={char + index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </h1>
  );
};
export default TypingGame;
