
function ExpenseItem(props){

    return (
     
        <div className="Expense-item">
                       
                       <h3>{props.title}</h3>

                       <div className="item">
                       <div>{props.date}</div>
                      
                         
                       <div>{props.amount}</div>
                       <div>{props.location}</div>
                     </div>
        </div>
    );
}

export default ExpenseItem;