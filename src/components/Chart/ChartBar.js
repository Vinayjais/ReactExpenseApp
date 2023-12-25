

import React from "react";
import './ChartBar.css';
const ChartBar =(props)=>{

    let barHeight = '0%';

     if(props.maxvalue > 0){
        barHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
     }
  return (
   
    <div className="chartbar">
        <div className="chartbar_inner">
            <div className="chartbar_inner_fill" style={{height: barHeight}}>

            </div>
        </div>
        <div className="chartbar_label">
          {props.label}
        </div>
    </div>
      
  );
}

export default ChartBar;