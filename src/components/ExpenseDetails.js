function ExpenseDetails(props){

    return (



        <div className="item">
                   
        <h3>{props.title}</h3>
          
        <div>{props.amount}</div>
        <div>{props.location}</div>
      </div>

    );
}

export default ExpenseDetails;