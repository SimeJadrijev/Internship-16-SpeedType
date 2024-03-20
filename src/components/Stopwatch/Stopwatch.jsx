import React, { useEffect } from "react";
import { useStopwatch, useTimer } from "react-timer-hook";

const Stopwatch = ({ gamePhase }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    start,
    pause,
    resume,
    restart,
    isRunning,
    reset,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    if (gamePhase === 0) {
    }
    if (gamePhase === 1) start();
    if (gamePhase === 2) pause();
  }, [gamePhase]);
  return (
    <div>
      <div style={{ fontSize: "20px" }}>
        Time: <span style={{ color: "#e2b714" }}>{minutes}</span>:
        <span style={{ color: "#e2b714" }}>{seconds}</span>
      </div>
    </div>
  );
};

export default Stopwatch;
