import React from 'react';

import Chart from './Chart';
import Card from '../UI/Card';

import './ChartList.css';


const ChartList = (props) => {
  const months = [
    {'month': 'Jan', 'value': 0},
    {'month': 'Feb', 'value': 0},
    {'month': 'Mar', 'value': 0},
    {'month': 'Apr', 'value': 0},
    {'month': 'May', 'value': 0},
    {'month': 'Jun', 'value': 0},
    {'month': 'Jul', 'value': 0},
    {'month': 'Aug', 'value': 0},
    {'month': 'Sep', 'value': 0},
    {'month': 'Oct', 'value': 0},
    {'month': 'Nov', 'value': 0},
    {'month': 'Dec', 'value': 0},
  ];

  let maxValue = 0;
  
  props.data.forEach(expense => {
    let amount = expense.amount;
    let month = expense.date.getMonth();
    months[month].value += amount;
    maxValue = Math.max(maxValue, months[month].value);
  });

  let updatedMonthExpenses = months.map((data) => {
    return <Chart key={Math.random()} month={data.month} maxValue={maxValue} value={data.value} />
  });

  return <Card className='chartList'>
    {updatedMonthExpenses}
  </Card>
};

export default ChartList;