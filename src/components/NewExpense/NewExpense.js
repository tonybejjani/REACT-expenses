/** @format */
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setFormVisible(false);
  };

  const startEditingHandler = () => {
    setFormVisible(true);
  };

  const stopEditingHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!formVisible && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
