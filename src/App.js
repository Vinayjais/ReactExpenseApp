
import './App.css';
import ExpenseFilter from './components/ExpenseFilter';
import React,{useState} from 'react';

import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expnses';

const listOfExpenses = [
 
];

function App() {

        const [ newExpense, setExpenses] = useState(listOfExpenses);
    
       const [filteredYear, setFilteredYear] = useState('2023');

      function onSaveExpense(ExpenseData){

          console.log(ExpenseData);
          
           setExpenses((prevExpense)=>{
          
             return [ExpenseData,...prevExpense];
           
      });

      };
   

     function filterHandler(selected){
        
        setFilteredYear(selected);

     }
  
    return (
      <div className="App">
            
            <ExpenseForm onAddNewExpense={onSaveExpense}></ExpenseForm>  
            <ExpenseFilter selected={filteredYear} onchangeFilter={filterHandler}></ExpenseFilter> 
            <Expenses items={newExpense}></Expenses>
        
        
       
      </div>
    );
 
 
}

export default App;
