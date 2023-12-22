import logo from './logo.svg';
import './App.css';

import ExpenseForm from './components/ExpenseForm';
 import ExpenseItem from './components/ExpenseItem';


function App() {

 

    
  
    return (
      <div className="App">
            
            <ExpenseForm></ExpenseForm>   

         <div className='Expenses'>
          <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
          <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
          <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
          </div>
        
       
      </div>
    );
 
 
}

export default App;
