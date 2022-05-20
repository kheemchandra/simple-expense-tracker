import React from 'react';

import ExpenseItemDate from './ExpenseItemDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
  <ul className='expenseItem'>
    <li><ExpenseItemDate date={props.date}/></li>
    <li className='expenseItem__title'>{props.title}</li>
    <li className='expenseItem__amount'>${props.amount}</li>
  </ul>
  );
};

export default ExpenseItem;
