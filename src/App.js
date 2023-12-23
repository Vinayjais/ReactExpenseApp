
import './App.css';

import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expnses';

function App() {
    
       

      function onSaveExpense(ExpenseData){
          
          const newExpense ={
            ...ExpenseData,
            id: Math.random().toString(),
          };
          
          console.log(newExpense);

      };

    
  
    return (
      <div className="App">
            
            <ExpenseForm onAddNewExpense={onSaveExpense}></ExpenseForm>   
            <Expenses></Expenses>
        
        
       
      </div>
    );
 
 
}

export default App;
