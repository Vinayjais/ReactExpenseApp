 import React from "react";

 import './From.css';


 function FormButton(props){

    return (
        <form   onSubmit={props.onClick}>
           <div className="Expense-form card">
               <div className="AddNewButton">
                  <button >Add New Expense</button>

               </div>

           </div>
           </form>
    );
 }

 export default FormButton;