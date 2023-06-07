"use client";

import usePlayer from "@/hooks/userPlayer";
import { FC } from "react";

interface PlayerProps {}

const Player: FC<PlayerProps> = ({}) => {
  const player = usePlayer();
  

  return <div>Player</div>;
};

export default Player;
