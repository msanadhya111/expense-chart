import React, { useState } from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 19.12,
    date: new Date(2020, 5, 10),
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 294.12,
    date: new Date(2019, 6, 12),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 394.12,
    date: new Date(2020, 8, 16),
  },
]

const App = () => {

  const [totalExpenses, setExpenses] = useState(expenses);

  const addExpenseDataHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      console.log([expense, ...prevExpenses]);        // this is how we used the previous state data #bestapproach
      return [expense, ...prevExpenses]
    })
  }
  
  return (
    <div>
         <NewExpense onAddExpense={addExpenseDataHandler} />
         <Expenses items={totalExpenses}></Expenses>
    </div>
  );
}

/*  return React.createElement(
    'div',

    {},
    React.createElement('h2', {}, `Let's get started`),
    React.createElement(Expenses, {items: expenses})
  ) */

export default App;

//                                  Functional Components vs Class based components
/*

It uses plain ES6 javascript so it is easy to
write and test

It yields better performance as no memory allocated
to lifecycle methods and we don't nmeed to keep a 
check for that

It does not include lifecycle methods so we do 
not have to understand when lifecycle method will
get called


// In earlier project we will see importing React in all the components, as in older react there was we have to
// write something React.createElement that we did above. Now with JSX code it will under the hood convert the
// JSX code into the one which we used to write before.
// There was one more query which got answered here why we need only one root in return as we check the above
// code of React.createElement if we do not write the root div we end up returning the 2 element which never happens
// always we have the element and then we form the child element and then go on
// Although now we do not need to import React as we are using the JSX one now

/* ***************** Lifting the state up *********************

It means we wants to pass the data bw 2 components that has no relation inbetween them as we see how to pass data
only in child-to-parent and parent-to-child. Here we pass the data to the component which has a relation with both
component like NewExpense and ExpenseForm component, there is no relation bw this 2 component but App component 
has relation with both so if we wants to communicate between both component we will use App component means for 
example we can paas the data from NewExpense to App and then from App to ExpenseForm by using child-to-parent and
parent-to-child relationship 
*/