import React ,{useState}from "react";
import '../components/From.css';

function ExpenseForm(){
   
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
             title: enteredTitle,
             amount: enteredAmount,
             date : new Date(enteredDate)

        };

        console.log(inputData);
    }
        
    return (
            <form  onSubmit={dataHandler}>
        <div className="Expense-form">
               <div className="form">
                    
                    <input type="text" placeholder="Title" onChange={titleHandler}></input>
                    <input type="number" placeholder="Amount" onChange={amountHandler}></input>
                    <input type="date" placeholder="Date" onChange={dateHandler}></input>

                    <div>
                        <button>Add</button>
                    </div>
               </div>

        </div>
        </form>
    );
}

export default ExpenseForm;