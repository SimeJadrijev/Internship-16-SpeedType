import { Button } from "@mui/material";
import { useGameInfo } from "../../Providers/GameInfoProvider";
import TypingGame from "../../components/Games/TypingGame";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const RegularModePage = () => {
  const { gameMode, gameLevel, updateLevel } = useGameInfo();
  const [timeStarted, setTimeStarted] = useState(false);
  const [passedTime, setPassedTime] = useState(0);
  // const [gameCompleted, setGameCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePhase, setGamePhase] = useState(0);

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
      <TypingGame level={gameLevel} setGamePhase={setGamePhase} />
      <Button
        disabled={gamePhase !== 2}
        variant="contained"
        onClick={() => updateLevel(gameLevel + 1)}
      >
        Next level
      </Button>
    </>
  );
};
export default RegularModePage;
