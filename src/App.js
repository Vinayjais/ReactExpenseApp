
import './App.css';
import React,{useState} from 'react';

import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expnses';
import FormButton from './components/FormButton';

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
        
let formConaten =  <ExpenseForm cancelAdd={cancelAdding} onAddNewExpense={onSaveExpense}></ExpenseForm>;
let prevForm=  <FormButton onClick={buttonClicked}></FormButton>;

        const [ FormContentInput, setFormContent] = useState(prevForm);
        const [ newExpense, setExpenses] = useState(listOfExpenses);
       function onSaveExpense(ExpenseData){

         // console.log(ExpenseData);
          
           setExpenses((prevExpense)=>{
          
             return [ExpenseData,...prevExpense];
           
      });

      };
   
      function buttonClicked(){
          setFormContent(formConaten);

      }
      function cancelAdding(){
        setFormContent(prevForm)
      }
    
  
    return (
      <div className="App">
            
            {FormContentInput}
            <Expenses items={newExpense}></Expenses>
        
        
       
      </div>
    );
 
 
}

export default App;
