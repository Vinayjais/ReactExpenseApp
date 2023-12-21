import logo from './logo.svg';
import './App.css';


 import ExpenseItem from './components/ExpenseItem';


function App() {

 

    
  
    return (
      <div className="App">
       
       
          <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
          <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
          <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>
        
        
       
      </div>
    );
 
 
}

export default App;
