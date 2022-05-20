import React from "react";

import "./Chart.css";

const Chart = (props) => {
  let a = props.maxValue;
  let b = props.value;
  let expenseHeight = (a) ? (b/a * 100) : 0;
  expenseHeight = 100 - expenseHeight;

  let expenseStyle = {
    'background': `linear-gradient(rgb(137, 123, 205) ${expenseHeight}%, rgb(0, 0, 139) ${expenseHeight}%)`,
  };
  
  
  return (
    <div className="chart">
      <div className="chart__bar" style={expenseStyle}>        
      </div>
      {props.month}
    </div>
  );
};

export default Chart;
