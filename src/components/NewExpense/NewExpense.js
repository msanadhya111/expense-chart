import "./NewExpense.css";

import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const isEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={isEditingHandler}>
          Add New Expenses
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
