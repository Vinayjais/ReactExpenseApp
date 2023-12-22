 import React from 'react';
import Expensecss from '../components/Expense.css'

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
 
function ExpenseItem(props){

                 const clickHandler =()=>{
                     console.log('clicked');
                 };

    return (
     
        <div className="Expense-item">
                       
                       
                       <ExpenseDate date={props.date}></ExpenseDate>
                       <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
                       <button onClick={clickHandler}>Delete Expense</button>
                     
        </div>
    );
}

export default ExpenseItem;