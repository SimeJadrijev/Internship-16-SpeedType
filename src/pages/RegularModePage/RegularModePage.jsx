import { useGameInfo } from "../../Providers/GameInfoProvider";
import TypingGameComponent from "../../components/Games/TypingGame";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const RegularModePage = () => {
  // const { gameMode, gameLevel, updateLevel, resultText } = useGameInfo();
  // const [userInput, setUserInput] = useState("");
  // const [timeStarted, setTimeStarted] = useState(false);
  // const [passedTime, setPassedTime] = useState(0);
  // const [gameCompleted, setGameCompleted] = useState(false);
  // const [gameOver, setGameOver] = useState(false);

  // useEffect(() => {
  //   if (gameLevel === 0) updateLevel(1);
  //   setTimeStarted(false);
  //   setPassedTime(0);
  //   setGameCompleted(false);
  //   setUserInput("");
  //   document.getElementById("myInput").value = "";
  // }, [gameLevel, updateLevel]);

  // useEffect(() => {
  //   let intervalId;
  //   if (timeStarted && !gameCompleted) {
  //     intervalId = setInterval(() => {
  //       setPassedTime((prev) => prev + 1);
  //     }, 1000);
  //   }

  //   if (gameCompleted) {
  //     gameLevel === 3
  //       ? console.log("gotov 3 level")
  //       : console.log("nije gotov 3 level");
  //   }

  //   return () => clearInterval(intervalId);
  // }, [timeStarted, gameCompleted, gameLevel]);

  // useEffect(() => {
  //   if (gameOver && !gameCompleted) {
  //     setGameCompleted(true);
  //     setGameOver(false);
  //   }
  //   setGameOver(false);
  // }, [gameOver, gameCompleted]);

  return (
    <>
      <TypingGameComponent />
    </>
  );
};
export default RegularModePage;
