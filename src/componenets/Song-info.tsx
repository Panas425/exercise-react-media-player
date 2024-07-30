import { ReactElement } from "react";
import "./Song-info.css"

export function SongInfo(): ReactElement {
    return (
    <div className="container-info">        
    <span className="material-symbols-outlined">
    add_circle
    </span>
        <div className="song-info">
            <p className="name">Abbey Road</p>
            <p>The Beatles</p>
        </div>

        <span className="material-symbols-outlined">favorite</span>
    </div>
    );
  }