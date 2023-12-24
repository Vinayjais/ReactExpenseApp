
import './App.css';
import React,{useState} from 'react';

import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expnses';

const listOfExpenses = [
  {
    title:'cake',
    amount:'250',
    date:new Date(2023,5,12)
   },
   {
    title:'coke',
    amount:'25',
    date:new Date(2023,6,10)

   },
   {
    title:'laptop',
    amount:'25000',
    date:new Date(2024,5,12)

   },
   {
    title:'laate',
    amount:'250',
    date:new Date(2025,6,12)

   } 
];

function App() {

        const [ newExpense, setExpenses] = useState(listOfExpenses);
    

      function onSaveExpense(ExpenseData){

          console.log(ExpenseData);
          
           setExpenses((prevExpense)=>{
          
             return [ExpenseData,...prevExpense];
           
      });

      };
   

    
  
    return (
      <div className="App">
            
            <ExpenseForm onAddNewExpense={onSaveExpense}></ExpenseForm>  
            <Expenses items={newExpense}></Expenses>
        
        
       
      </div>
    );
 
 
}

export default App;
