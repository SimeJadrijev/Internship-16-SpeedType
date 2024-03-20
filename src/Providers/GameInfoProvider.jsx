import { useContext, useState, createContext } from "react";

const defaultInfo = {
  gameMode: "regular",
  averageWpm: 0,
  gameLevel: 1,
};
const GameInfoContext = createContext(defaultInfo);

const GameInfoProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(defaultInfo.gameMode);
  const [averageWpm, setAverageWpm] = useState(defaultInfo.averageWpm);
  const [gameLevel, setGameLevel] = useState(defaultInfo.gameLevel);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);

  const updateMode = (mode) => {
    setGameMode(mode);
  };

  const updateLevel = (level) => {
    setGameLevel(level);
  };

  return (
    <GameInfoContext.Provider
      value={{
        gameMode,
        updateMode,
        gameLevel,
        updateLevel,
        averageWpm,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
};

const useGameInfo = () => useContext(GameInfoContext);

export { GameInfoProvider, useGameInfo };
