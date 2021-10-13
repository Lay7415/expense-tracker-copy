import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

//it's not a wrapper component
const NewExpense = (props) => {
    //lifting up method
    const saveExpenseDataHundler = data => {
        console.log('in NewExpense.js');
        console.log(data);
        let expenseData = {
            ...data,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);
    }



    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;