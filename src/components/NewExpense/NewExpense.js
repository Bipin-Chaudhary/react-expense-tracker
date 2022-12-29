import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addButtonClicked, setAddButtonClicked] = useState(false);

  const submitExpenseHandler = (expense) => {
    setAddButtonClicked(false);
    props.onAddExpense(expense);
  };

  const addExpenseHandler = () => {
    setAddButtonClicked(true);
  };

  const cancelClickHandler = () => {
    setAddButtonClicked(false);
  };

  let ExpenseRender = <button onClick={addExpenseHandler}>Add Expense</button>;

  if (addButtonClicked)
    ExpenseRender = (
      <ExpenseForm
        onExpenseSubmit={submitExpenseHandler}
        onCancel={cancelClickHandler}
      />
    );

  return <div className="new-expense">{ExpenseRender}</div>;
};

export default NewExpense;
