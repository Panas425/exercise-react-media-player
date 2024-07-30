import { ReactElement } from "react";
import { IPlaylist } from "../interfaces";
import "./Playlist.css"

interface IPlaylistProps{
    Playlist: IPlaylist;
}

export function Playlist({Playlist}: IPlaylistProps):ReactElement{
    return(
    <>
    <div className="playlist" key={Playlist.id}>
    <img src={Playlist.image} alt={Playlist.key} className="playlist-image" />
      <div className="info">
        <p className="key">{Playlist.key}</p> 
        <p>{Playlist.value}</p>
      </div>
      <div className="play-button">
      <span className="material-symbols-outlined">play_arrow</span>
      </div>
    </div>

    </>
    );
}