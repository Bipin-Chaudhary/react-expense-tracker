import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (!props?.items?.length)
    return (
      <p className="expenses-list__fallback">
        You have no expense in this year!
      </p>
    );

  return props.items.map((expense) => {
    return (
      <ul className="expenses-list" key={expense.id}>
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    );
  });
};

export default ExpensesList;
