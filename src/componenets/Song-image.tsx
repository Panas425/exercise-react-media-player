import { ReactElement } from "react";
import abbey_road from '../assets/abbey_road.png';
import './Song-image.css'

export function Songimage(): ReactElement {
    return (
    <div className="image-container">
            <img src={abbey_road} alt="Sample Image" className = "song-image"/>
    </div>
    );
  }