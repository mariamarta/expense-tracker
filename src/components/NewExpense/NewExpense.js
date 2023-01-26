import React, { useState }from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    const [ isFormShowing, setIsFormShowing ] = useState(false)

    const { onAddExpense } = props;

    const saveExpenseDataHandler = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        onAddExpense(expenseData)
    }

    const showFormHandler = () => {
        setIsFormShowing(!isFormShowing)
    }

    let content = <button onClick={showFormHandler}>Add New Expense</button>

    if ( isFormShowing ) {
        content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showFormHandler}/>
    }

    return (
        <div className='new-expense'>
            {content}
        </div>
    )
}

export default NewExpense;
