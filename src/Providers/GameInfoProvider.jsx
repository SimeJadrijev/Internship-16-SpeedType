import { useContext, useState } from "react";
import { createContext } from "react";
import { getGameTexts, getGameTextsByLevel, getRandomText } from "../data";

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
  if (gameLevel !== 0) {
    const textsByLevel = getGameTextsByLevel(gameLevel);
    let resultText = getRandomText(textsByLevel);
  }

  const updateMode = (mode) => {
    setGameMode(gameMode);
  };
  const updateLevel = (level) => {
    setGameLevel(gameLevel);
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
        resultText,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
};

const useGameInfo = () => useContext(GameInfoContext);

export default GameInfoProvider;
