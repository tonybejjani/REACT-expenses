/** @format */
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
const Expenses = (props) => {
  const [year, setYear] = useState('2019');

  const saveSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  };

  let FilteredExpenses = props.items.filter((item) => {
    return Number(item.date.getFullYear()) === Number(year);
  });

  return (
    <div className="expenses">
      <ExpensesFilter onFilteredYear={saveSelectedYear} />
      <ExpensesList items={FilteredExpenses} />
    </div>
  );
};

export default Expenses;
