import { ReactElement } from "react";
import abbey_road from '../assets/abbey_road.png';

export function Songimage(): ReactElement {
    return (
    <div>
        <div>
            <img src={abbey_road} alt="Sample Image" style={{ width: '480px', height: 'auto' }} />
        </div>
    </div>
    );
  }