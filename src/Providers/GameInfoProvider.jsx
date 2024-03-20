/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState, useEffect, createContext } from "react";
// import { getGameTexts, getGameTextsByLevel, getRandomText } from "../data";
import { getGameTexts, getRandomGameText } from "../data";

const defaultInfo = {
  gameMode: "regular",
  averageWpm: 0,
  gameLevel: 0,
};
const GameInfoContext = createContext(defaultInfo);

const GameInfoProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(defaultInfo.gameMode);
  const [averageWpm, setAverageWpm] = useState(defaultInfo.averageWpm);
  const [gameLevel, setGameLevel] = useState(defaultInfo.gameLevel);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);
  // FIXME nepotrebno
  //   const [resultText, setResultText] = useState(""); // Dodajte state za resultText

  // TODO vidit sta triba s ovin
  //   useEffect(() => {
  //     if (gameLevel !== 0) {
  //       const textsByLevel = getGameTextsByLevel(gameLevel);
  //       setResultText(getRandomText(textsByLevel)); // Postavite rezultat teksta na temelju razine igre
  //     }
  //   }, [gameLevel]);

  const updateMode = (mode) => {
    setGameMode(mode);
  };

  const updateLevel = (level) => {
    setGameLevel(level);
  };

  const updateAverageWpm = (wpm) => {
    const newWpm = Math.floor(
      (averageWpm * (totalGamesPlayed - 1) + wpm) / totalGamesPlayed
    );
    setAverageWpm(newWpm);
    setTotalGamesPlayed(totalGamesPlayed + 1);
  };

  return (
    <GameInfoContext.Provider
      value={{
        gameMode,
        updateMode,
        gameLevel,
        updateLevel,
        averageWpm,
        updateAverageWpm,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
};

const useGameInfo = () => useContext(GameInfoContext);

export { GameInfoProvider, useGameInfo };
