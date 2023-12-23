
import './App.css';
import ExpenseFilter from './components/ExpenseFilter';
import React,{useState} from 'react';

import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expnses';

function App() {
    
       const [filteredYear, setFilteredYear] = useState('2023');

      function onSaveExpense(ExpenseData){
          
          const newExpense ={
            ...ExpenseData,
            id: Math.random().toString(),
          };
          
          console.log(newExpense);

      };
   

     function filterHandler(selected){
        
        setFilteredYear(selected);

     }
  
    return (
      <div className="App">
            
            <ExpenseForm onAddNewExpense={onSaveExpense}></ExpenseForm>  
            <ExpenseFilter selected={filteredYear} onchangeFilter={filterHandler}></ExpenseFilter> 
            <Expenses></Expenses>
        
        
       
      </div>
    );
 
 
}

export default App;
