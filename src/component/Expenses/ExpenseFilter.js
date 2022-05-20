import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const newSelectedYear = (event) => {
    props.onChangeYear(event.target.value);
  };


  return (
    <div className="ExpenseFilter">
      <h4>Filter by year</h4>
      <select defaultValue='2020' onChange={newSelectedYear} className="ExpenseFilter__options" > 
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
