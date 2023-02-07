import React from "react";
import './IncomeExpense.css';
function IncomeExpense(props){
    return (
        <div className="income-expense">
        <div className="inc">
            <h4>INCOME</h4>
            <p className="income">Rs. {props.income}</p>
        </div>
        <div className="exp">
            <h4>EXPENSE</h4>
            <p className="expenses">Rs. {props.expense}</p>
        </div>
    </div>
    )
}

export default IncomeExpense;