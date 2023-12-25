

import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) =>{
     const dataPointsValue = props.dataPoints.map(datapoint => {
        return datapoint.value;
     }
        );
     const totalMaxValue = Math.max(...dataPointsValue);
    return (
             <div>
                 <div className="chart">
                    {props.dataPoints.map((datapoint)=>{
                        
                     return (  <ChartBar
                         key={datapoint.label}
                         value={datapoint.value}
                         maxvalue={totalMaxValue}
                         label ={datapoint.label}         
                        ></ChartBar> );
                    })}
                      
                 </div>


             </div>
    );
};


export default Chart;