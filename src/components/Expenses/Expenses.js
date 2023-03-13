/** @format */
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
  const [year, setYear] = useState('2019');

  const saveSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  };

  let FilteredExpenses = props.items.filter((item) => {
    return Number(item.date.getFullYear()) === Number(year);
  });

  let listExpenses = <p>No Expenses Found.</p>;

  if (FilteredExpenses.length > 0) {
    listExpenses = FilteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter onFilteredYear={saveSelectedYear} />
      <Card>{listExpenses}</Card>
    </div>
  );
};

export default Expenses;
