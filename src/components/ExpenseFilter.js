

import React from "react";

function ExpenseFilter(props){

    function dropDownHandler(event){
           props.onchangeFilter(event.target.value);
    }

    return (
            <div>
                <div>
                    <label>filter By Year</label>

                    <select value={props.selected} onChange={dropDownHandler}>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                    </select>
                </div>
            </div>
    );
}

export default ExpenseFilter;