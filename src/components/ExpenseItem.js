import Expensecss from '../components/Expense.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
 
function ExpenseItem(props){

    return (
     
        <div className="Expense-item">
                       
                       
                       <ExpenseDate date={props.date}></ExpenseDate>
                       <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>

                     
        </div>
    );
}

export default ExpenseItem;