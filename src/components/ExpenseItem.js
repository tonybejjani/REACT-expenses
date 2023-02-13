/** @format */
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
