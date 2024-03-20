import { Box, Button, Typography } from "@mui/material";
import { useGameInfo } from "../../Providers/GameInfoProvider";
import TypingGame from "../../components/Games/TypingGame/TypingGame";
import { useEffect, useState } from "react";
import Stopwatch from "../../components/Stopwatch";
import { useStopwatch } from "react-timer-hook";
import NextLevelButton from "../../components/Buttons";

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
  // FIXME
  // useEffect(() => {
  //   setTimeStarted(false);
  //   setPassedTime(0);
  //   setGameCompleted(false);
  //   // setUserInput("");
  //   // document.getElementById("myInput").value = "";
  // }, [gameLevel, updateLevel]);

  useEffect(() => {
    let intervalId;
    if (timeStarted && gamePhase !== 2) {
      intervalId = setInterval(() => {
        setPassedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timeStarted, gamePhase, gameLevel]);

  if (gamePhase === 2) {
    gameLevel === 3
      ? console.log("gotov 3 level")
      : console.log("nije gotov 3 level");
  }

  if (gameOver && gamePhase !== 2) {
    setGameCompleted(true);
  }

  return (
    <>
      <h2>Regular Mode</h2>
      <Box display={"flex"} flexDirection={"column"} gap={1 / 4} marginTop={3}>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Typography fontSize={"20px"} variant="p">
            Level:
          </Typography>
          <Typography fontSize={"20px"} variant="p" color={"#e2b714"}>
            {gameLevel}
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Typography fontSize={"20px"} variant="p">
            WPM:
          </Typography>
          <Typography fontSize={"20px"} variant="p" color={"#e2b714"}>
            {gameLevel}
          </Typography>
        </Box>
        <Stopwatch />
      </Box>
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
