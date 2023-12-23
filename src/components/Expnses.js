import React from 'react';
import ExpenseItem from './ExpenseItem'

function Expenses (){

    return(
        <div className='Expenses'>
        <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
        <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
        <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
        </div>
    );
}


export default Expenses;