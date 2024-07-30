import { ReactElement } from "react";
import { Playlist } from "./Playlist"; // Component imported from another file
import { PlayLists } from "../data";    // Assuming PlayLists is an array of data objects
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
