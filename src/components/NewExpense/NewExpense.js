/** @format */

import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const submitExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={submitExpenseHandler} />
    </div>
  );
};

export default NewExpense;
