import React from "react";

import "./ExpenseItemDate.css";

const ExpenseItemDate = (props) => {
  return (
    <ul className="ExpenseItemDate">
      <li className="ExpenseItemDate__month">{props.date.toLocaleString('en-US', { month: 'long' })}</li>
      <li className="ExpenseItemDate__year">{props.date.getFullYear()}</li>
      <li className="ExpenseItemDate__day">{props.date.toLocaleString("en-US", { day: "2-digit" })}</li>
    </ul>
  );
};

export default ExpenseItemDate;
