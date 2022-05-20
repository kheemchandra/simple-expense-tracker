import React, { useState } from "react";

import Card from "../UI/Card";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const changeTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setNewDate(event.target.value);
  };

  const buttonClicked = (event) => {
    event.preventDefault();
    if ([newTitle, newAmount, newDate].every((e) => e !== "")) {
      props.onExpenseHandler([newTitle, newAmount, newDate]);
    }
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
    event.target.reset();
  };

  return (
    <Card className='form-wrapper'>
      <form onSubmit={buttonClicked}>
        <div className="ExpenseForm">
          <div>
            <label className="ExpenseForm-label">Title</label>
            <input
              onChange={changeTitleHandler}
              className="ExpenseForm-control"
              type="text"
              required
            />
          </div>
          <div>
            <label className="ExpenseForm-label">Amount</label>
            <input
              onChange={changeAmountHandler}
              className="ExpenseForm-control"
              type="number"
              min="0"
              step="0.05"
            />
          </div>
          <div>
            <label className="ExpenseForm-label">Date</label>
            <input
              onChange={changeDateHandler}
              className="ExpenseForm-control"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <button className="ExpenseForm-button">Add Expense</button>
      </form>
    </Card>
  );
};

export default ExpenseForm;
