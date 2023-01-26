import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const { enteredTitle, enteredAmount, enteredDate } = userInput;
    const { onSaveExpenseData, onCancel } = props;

    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: e.target.value
            }
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: e.target.value
            }
        })
    }

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: e.target.value
            }
        })
    }

    const cancelHandler = () => {
        
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        onCancel();
    }

    const submitHandler = (e) => {
        
        e.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        onSaveExpenseData(expenseData)
        onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
