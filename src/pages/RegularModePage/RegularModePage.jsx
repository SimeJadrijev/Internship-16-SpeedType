import { Box, Button, Dialog, Typography } from "@mui/material";
import { useGameInfo } from "../../Providers/GameInfoProvider";
import TypingGame from "../../components/Games/TypingGame/TypingGame";
import { useState } from "react";
import Stopwatch from "../../components/Stopwatch";
import NextLevelButton from "../../components/Buttons";
import LiveStats from "../../components/LiveStats";
import ResetButton from "../../components/Buttons/ResetButton";

const RegularModePage = () => {
  const { gameMode, gameLevel, updateLevel } = useGameInfo();
  // const [gameCompleted, setGameCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePhase, setGamePhase] = useState(0);

  if (gamePhase === 2 && gameLevel === 4) {
    console.log("gotov!");
  }

  if (gameOver && gamePhase !== 2) {
    setGameCompleted(true);
  }

  return (
    <>
      <h2>Regular Mode</h2>
      <LiveStats gameLevel={gameLevel} />
      <Stopwatch gamePhase={gamePhase} />
      <TypingGame level={gameLevel} setGamePhase={setGamePhase} />
      {(gameLevel !== 3 || gamePhase !== 2) && (
        <NextLevelButton
          updateLevel={updateLevel}
          gameLevel={gameLevel}
          gamePhase={gamePhase}
        />
      )}
      {gameLevel === 3 && gamePhase === 2 && (
        <ResetButton updateLevel={updateLevel} />
      )}
    </>
  );
};
export default RegularModePage;
