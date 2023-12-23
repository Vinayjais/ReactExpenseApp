 import React, {useState} from 'react';
import './Expense.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
 
function ExpenseItem(props){
     
          const [amount, setAmount] = useState(props.amount);
          const [title, setTitle] = useState(props.title);

                 const clickHandler =()=>{
                    setAmount('100');
                    setTitle('Updated');
                 };

    return (
     
        <div className="Expense-item">
                       
                       
                       <ExpenseDate date={props.date}></ExpenseDate>
                       <ExpenseDetails title={title} amount={amount} location={props.location}></ExpenseDetails>
                       <button onClick={clickHandler}>  Change</button>
                     
        </div>
    );
}

export default ExpenseItem;