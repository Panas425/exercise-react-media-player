import { ReactElement } from "react";
import { IPlaylist } from "../interfaces";

interface IPlaylistProps{
    Playlist: IPlaylist;
}

export function Playlist({Playlist}: IPlaylistProps):ReactElement{
    return(
    <>
    <div className="playlist" key={Playlist.id}>
      <h2>{Playlist.image}</h2>
      <p>{Playlist.key}</p>
      <p>{Playlist.value}</p>
    </div>

    </>
    );
}