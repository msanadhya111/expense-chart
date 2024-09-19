import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(''); // Initialize with empty as we will get here string only

    const [enteredDate, setEnteredDate] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

  /*  const [userState, setUserState] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: '2.0'
    }) */



    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
     /*   setUserState({
            ...userState,                    // In using same state for all, we have to use something like this
            enteredTitle: event.target.value // otherwise it make it as undefined or rather remove that attribute
        })                                   // from the object itself 
        console.log(userState.enteredAmount); */
    }

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
      /*  setUserState({                      // Updating the state like this is not a good practice because here
            ...userState,                     // we depends upon the previous state and this is not a good practice
            enteredAmount: event.target.value // when we depend upon the previous state
        }) */

    /*    setUserState((prevState) => {         // This is how we should do if we depends upon previous state
            return { ...prevState, enteredTitle: event.target.value };
        }) */
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
     /*   setUserState({
            ...userState,                        // Check by not setting it !!!!!!!!!!!!!!!!!!!!!!!!
            enteredDate: event.target.value
        }) */
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);

     //   console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    // onSubmit inbuilt function in the form when we use button with type as submit but one thing that we do 
    // not want here that is pageReload when we click on submit button for that inside this we have used
    // preventDefault method
    return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangedHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input 
                            type='number'
                            min="0.01" 
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangedHandler}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input
                            type='date' 
                            min="2019-01-01" 
                            max="2022-12-31" 
                            value={enteredDate}
                            onChange={dateChangedHandler}
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                </div>
            </form>
    )
}

export default ExpenseForm;

// value in the input field serves as 2 way binding here whatever we add in the input box we will show that

// Till now by using props we have seen parent to child binding 

// ******* In the parent one notice the input tag, it has onChange and it is calling the the child component 
// and then the child one calls back the function written on the right of onChange and thus doing child 
// to parent and the same we also have to while building the custom one 

