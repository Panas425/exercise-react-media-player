import { ReactElement } from "react";
import { Playlist } from "./Playlist"; // Component imported from another file
import { PlayLists } from "../data";    // Assuming PlayLists is an array of data objects

export function LeftSection(): ReactElement {
  return (
    <div>
      {PlayLists.map(playlist => (
        <Playlist key={playlist.id} {...playlist} />
      ))}
    </div>
  );
}
