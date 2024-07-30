import { ReactElement } from "react";
import { Playlist } from "./Playlist"; 
import { PlayLists } from "../data";    
import "./LeftSection.css"
export function LeftSection(): ReactElement {
  return (
  <div>
    {PlayLists.data.map((playlist) => (
      <Playlist key={playlist.id} Playlist={playlist} />
    ))}
  </div>
  );
}
