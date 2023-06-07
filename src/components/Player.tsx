"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/userPlayer";
import { FC } from "react";

interface PlayerProps {}

const Player: FC<PlayerProps> = ({}) => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song)

  return <div>Player</div>;
};

export default Player;
