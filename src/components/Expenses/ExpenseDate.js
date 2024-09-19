import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    console.log(props.date)
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})
    console.log(month);
    console.log(day);
    console.log(year);

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}


export default ExpenseDate;

// className we used here because in JavaScript class is a reserved keyword(class as Object Oriented Class), and 
// in react we use JSX which is basically an extension to JavaScript so we className instead os class