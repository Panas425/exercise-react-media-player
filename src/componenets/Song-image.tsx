import { ReactElement } from "react";
import abbey_road from '../assets/abbey_road.png';

export function Songimage(): ReactElement {
    return (
    <div>
        <div>
            <img src={abbey_road} alt="Sample Image" style={{ width: '100%', height: 'auto' }} />
        </div>
    </div>
    );
  }