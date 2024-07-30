import { ReactElement } from "react";
import "./Buttons.css"
export function Buttons(): ReactElement {
    return (
        <>
        <div className="container-buttons">
        <span className="material-symbols-outlined">repeat</span>
        <div className="btns">
        <span className="material-symbols-outlined">fast_rewind</span>
        <span className="material-symbols-outlined">play_circle</span>
        <span className="material-symbols-outlined">fast_forward</span>
        </div>
        <span className="material-symbols-outlined">shuffle</span>
        </div>
        </>
    );
  }












