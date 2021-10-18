import React, { useState } from 'react';
import './Expenses.css';
import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHundler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHundler} />
        <ExpensesList expenses={filteredExpenses}/>
    </Card>
}

export default Expenses;