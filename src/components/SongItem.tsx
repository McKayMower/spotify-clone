"use client";
import { Song } from "@/types";
import { FC } from "react";

interface SongItemProps {
  onClick: (id: string) => void;
  data: Song;
}

const SongItem: FC<SongItemProps> = ({ onClick, data }) => {


    
  return <div>SongItem</div>;
};

export default SongItem;
