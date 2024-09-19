import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const filterChangedHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return selectedYear === expense.date.getFullYear().toString();
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangedFilter={filterChangedHandler}
      />
      <ExpensesChart dataPoints={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

// key concept in react
// When we are loading the lists from here so basically reacts put it at the end and then again update all the content
// by checking the previous values and we can see it from the inspect element that when we add elements all the
// elements which was there from before get highlighted as it update all values so it gives us performance issues
// and incase any state is attached with that it can override that so to tell react not to load all the data and
// only load the data at the place it is req we have to use 'key' which should be unique
// Key are used to uniquely identify the element
// Keys basically gives an identity to the element, so when an element is added, removed or modified we can stop
// unnecessary dom manipulation as we have unique identity for each element and we will only update the element that
// is modified
// If the list has many component and if we use proper keys then we can stop multiple re renders as we know which component
// has changed
// Reconciliation concept check
