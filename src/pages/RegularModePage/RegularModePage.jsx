import { Box, Button, Typography } from "@mui/material";
import { useGameInfo } from "../../Providers/GameInfoProvider";
import TypingGame from "../../components/Games/TypingGame/TypingGame";
import { useEffect, useState } from "react";
import Stopwatch from "../../components/Stopwatch";
import { useStopwatch } from "react-timer-hook";
import NextLevelButton from "../../components/Buttons";
import LiveStats from "../../components/LiveStats";

const RegularModePage = () => {
  const { gameMode, gameLevel, updateLevel } = useGameInfo();
  const [timeStarted, setTimeStarted] = useState(false);
  const [passedTime, setPassedTime] = useState(0);
  // const [gameCompleted, setGameCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePhase, setGamePhase] = useState(0);
  const { totalSeconds, seconds, minutes, start } = useStopwatch({
    autoStart: false,
  });

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
      <NextLevelButton
        updateLevel={updateLevel}
        gameLevel={gameLevel}
        gamePhase={gamePhase}
      />
    </>
  );
};
export default RegularModePage;
