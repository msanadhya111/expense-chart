import React from "react";
import "./ExpenseItem.css"; // This is how we can add a css inside a component
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

// toLocaleString is a method we have date function, here we can extract the info like day, month, year, weekday,
// hour, minute, second etc. or without passing any parameter we can find all the info in the default format
// The first parameter is a language specific format like india, america, swiss, etc which format we wants
// Second parameter is an object to specific what we want and till what info like for day, { day: '2-digit'},
// for month {month: 'long'}, year {year: 'numeric'}, etc

// props is basically the data passing between different components to make our react component dynamic
// props always passed in form of an object, the place from where we passed like title, amount, date it become
// keys and the right hand side data become the value of it like in an object it's like a property

// For eventHandler we have 'on' keyword and we can use any of the event handler available then 'onClick'
// We do not write the function while calling the event handler because if we does so then it will load
// the fn while loading the JSX not when we click on it so in event handlers we just point towards it
// so that it will get called only when it is called

// If we take any variable and update it's value by putting it inside any clickHandler, it's value will
// not be changed, as react load it only the first time by calling the component(means fn here) inside the
// component and that's it, it will not call it again
// For calling it again we use something called state, here we used 'useState' as it's fn component
// For class component we use setState and for fn component we use useState
// It basically registered the instance of the state on the memory everytime it gets called and it return
// 2 things first the value in the state and second the function through we can change the value in the
// form of an array. We can use the second arg that is fn to change the state in the memory
// Whenever state changes it loads that respective component again so this is why it works only in state
// Wherever useState and calling the second arg is placed it will load that respective component(fn) only
// We are using const for the first arg in the useState as it does not assign the value like equals to
// but it just gets the latest value in the state and for each time there will be a new instance of the
// state of the component that get's created.
