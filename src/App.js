import logo from './logo.svg';
import './App.css';


 import ExpenseItem from './components/ExpenseItem';


function App() {

      let components = [];

      for(let i=0;i<100;i++){
        components.push(  <ExpenseItem title="cake" date='24/10/2023' amount='2400' location="Market"></ExpenseItem>);
      }
  
    return (
      <div className="App">
       
         {components}
        
        
       
      </div>
    );
 
 
}

export default App;
