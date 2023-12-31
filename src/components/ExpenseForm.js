import React ,{useState}from "react";
import '../components/From.css';

function ExpenseForm(props){
   
     const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmount, setEnteredAmount] = useState('');
     const [enteredDate, setEnteredDate] = useState('');

    //  const [userInput , setUserInput] = useState({
    //          enteredTitle: '',
    //          enteredAmount:'',
    //          enteredDate:''
    //  });

    const titleHandler = (event)=>{
        setEnteredTitle(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   });
    }

    const amountHandler= (event)=>{
        setEnteredAmount(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //      enteredAmount: event.target.value,
    //    });
    }
    const dateHandler = (event) =>{
         setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
          
    const dataHandler =(event) =>{
        event.preventDefault();

        const inputData ={
              id: Math.random(),
             title: enteredTitle,
             amount: enteredAmount,
             date :  new Date(enteredDate),

        };

          props.onAddNewExpense(inputData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
        
    return (
            <form  onSubmit={dataHandler}>
        <div className="Expense-form card">
               <div>
                    
                    <input type="text" placeholder="Title" value={enteredTitle} required onChange={titleHandler}></input>
                    <input type="number" placeholder="Amount" value={enteredAmount} required onChange={amountHandler}></input>
                    <input type="date" placeholder="Date" value={enteredDate} required onChange={dateHandler}></input>

                    <div>
                        <button>Add</button> 
                    </div>
                    <div>
                    <button onClick={props.cancelAdd}> Cancel</button>

                    </div>
               </div>

        </div>
        </form>
    );
}

export default ExpenseForm;