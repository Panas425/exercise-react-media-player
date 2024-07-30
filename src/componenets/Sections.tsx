import { ReactElement } from "react";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import "./Sections.css"

export function Sections(): ReactElement {
    return (
    <div className="sections-container">
        <div className="left-section">
        <LeftSection></LeftSection>
        </div>
        <div className="right-section">
        <RightSection></RightSection>
        </div>
        
    </div>
    );
  }