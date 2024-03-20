import { useState } from "react";
import { useGameInfo } from "../../Providers/GameInfoProvider";
import { useStopwatch } from "react-timer-hook";
import LiveStats from "../../components/LiveStats";
import Stopwatch from "../../components/Stopwatch";
import TypingGame from "../../components/Games/TypingGame/TypingGame";
import NextLevelButton from "../../components/Buttons";

const InstantDeathModePage = () => {
  const { gameMode, gameLevel, updateLevel } = useGameInfo();
  const [timeStarted, setTimeStarted] = useState(false);
  const [passedTime, setPassedTime] = useState(0);
  // const [gameCompleted, setGameCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePhase, setGamePhase] = useState(0);
  const { totalSeconds, seconds, minutes, start } = useStopwatch({
    autoStart: false,
  });
  return (
    <>
      <h2>Instant Death Mode</h2>
      <LiveStats gameLevel={gameLevel} />
      <Stopwatch gamePhase={gamePhase} />
      <TypingGame
        level={gameLevel}
        setGamePhase={setGamePhase}
        pauseOnErrorParam={true}
      />
      <NextLevelButton
        updateLevel={updateLevel}
        gameLevel={gameLevel}
        gamePhase={gamePhase}
      />
    </>
  );
};
export default InstantDeathModePage;
