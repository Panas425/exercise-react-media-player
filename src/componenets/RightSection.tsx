import { ReactElement } from "react";
import { Songimage } from "./Song-image"; 
import { SongInfo } from "./Song-info";
import { Timeline } from "./Timeline";
import { Buttons } from "./Buttons";

import "./RightSection.css"
export function RightSection(): ReactElement {
  return (
  <div>
    <Songimage></Songimage>
    <SongInfo></SongInfo>
    <Timeline></Timeline>
    <Buttons></Buttons>
  </div>
  );
}