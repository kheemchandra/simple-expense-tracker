import React, {useState} from 'react';

import ExpenseForm from './component/NewExpenses/ExpenseForm';
import Expenses  from './component/Expenses/Expenses';

let expenses = [
  {key: 'e0', title: 'Fly Abroad', amount: 1000, date: new Date('2020/7/1')},
  {key: 'e1', title: 'New TV', amount: 799.65, date: new Date('2022/1/11')},
  {key: 'e2', title: 'Toilet Paper', amount: 94.12, date: new Date('2021/5/19')},
  {key: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date('2020/12/17')},
  {key: 'e4', title: 'Bugati Car', amount: 1500, date: new Date('2021/10/5')},
  {key: 'e5', title: 'New Desk(Wooden)', amount: 450, date: new Date('2020/7/30')},
];

let defautYear = '2020';

function App() {
  const [EXP, setEXP] = useState(expenses);
  const [year, setYear] = useState(defautYear);

  const expenseHandler = (data) => {
    setEXP((prevData) => {
      return [{
        key: Math.random().toString(),
        title: data[0],
        amount: +data[1],
        date: new Date(data[2])
      }, ...prevData]
    });
  }

  const changeYear = (newYear) => {
    setYear(newYear);
  }

  return (
    <div>
      <ExpenseForm onExpenseHandler={expenseHandler} />
      
      <Expenses onChangeYear={changeYear} year={year} data={EXP} />
    </div>
  );
}

export default App;
