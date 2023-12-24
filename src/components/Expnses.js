import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';
  
function Expenses (props){
       const [filteredYear, setFilteredYear] = useState('2023');
       function filterHandler(selected){
        
        setFilteredYear(selected);

     }

     const filteredExpense = props.items.filter((expense)=>{
          return expense.date.getFullYear().toString() === filteredYear;
     })
         

    return( 
          <div>       
            <ExpenseFilter selected={filteredYear} onchangeFilter={filterHandler}></ExpenseFilter> 
            
             <div className='Expenses'>

            {filteredExpense.map((expense)=> 
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date.toString()} amount={expense.amount}></ExpenseItem>
)}
        
        </div>
        </div>

    );
}


export default Expenses;