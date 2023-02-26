/** @format */
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
  const [year, setYear] = useState('');
  const saveSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  };

  console.log(year);

  return (
    <div className="expenses">
      <ExpensesFilter onFilteredYear={saveSelectedYear} />
      <Card>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
