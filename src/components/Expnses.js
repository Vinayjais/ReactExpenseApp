import React from 'react';
import ExpenseItem from './ExpenseItem'
  
function Expenses (props){
         

    return(
        <div className='Expenses'>

            {props.items.map((expense)=> <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>
)}
        
        <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
        </div>
    );
}


export default Expenses;