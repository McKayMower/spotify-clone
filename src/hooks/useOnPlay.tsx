import { Song } from "@/types";
import usePlayer from "./userPlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) return authModal.onOpen();

    player.setId(id);
    player.setIds(songs.map((song) => song.id)); // creates a playlist of all songs user has clicked
  };

  return onPlay;
};

export default useOnPlay;