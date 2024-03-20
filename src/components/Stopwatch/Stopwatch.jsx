import React, { useEffect } from "react";
import { useStopwatch, useTimer } from "react-timer-hook";

const Stopwatch = () => {
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
