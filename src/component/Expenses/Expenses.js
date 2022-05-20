import React from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ChartList from '../Chart/ChartList';
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  let data = props.data.filter((expense) => expense.date.getFullYear() === +props.year);
  let expensesArray = data.map((expense) => {
    return (
      <ExpenseItem
        key={expense.key}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    );
  });

  let content = <h2 style={{color: 'white', textAlign: 'center'}}>Found no expenses.</h2>
  if(expensesArray.length){
    content = expensesArray;
  }

  return (
    <Card className="Expenses">
      <ExpenseFilter onChangeYear={props.onChangeYear} />
      <ChartList data={data} />
      <div >{content}</div>
    </Card>
  );
};

export default Expenses;
