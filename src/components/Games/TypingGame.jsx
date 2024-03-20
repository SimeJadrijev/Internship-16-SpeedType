import React, { useEffect, useMemo } from "react";
// import it
import useTypingGame from "react-typing-game-hook";
import { getRandomGameText } from "../../data";

// -------------------------------------------------------------

const TypingGame = ({ level, setGamePhase }) => {
  const randomGameText = useMemo(() => getRandomGameText(level), [level]);
  // Call the hook
  const {
    states: { chars, charsState, phase },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(randomGameText);

  useEffect(() => {
    setGamePhase(phase);
  }, [phase]);

  // Capture and display!
  return (
    <h1
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
        let color = state === 0 ? "black" : state === 1 ? "green" : "red";
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
