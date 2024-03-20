import { Box, Typography } from "@mui/material";
import { useGameInfo } from "../../Providers/GameInfoProvider";
import { useEffect, useState } from "react";

const LiveStats = ({ gameLevel }) => {
  return (
    <>
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
            {/* tba */}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LiveStats;
