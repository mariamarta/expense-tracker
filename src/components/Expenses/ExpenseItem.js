import React from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({ expenseTitle, expenseAmount, expenseDate }) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expenseDate}/>
                <div className='expense-item__description'>
                    <h2>{expenseTitle}</h2>
                    <div className='expense-item__price'>${expenseAmount}</div>
                </div>
            </Card>
        </li>
    )

}

export default ExpenseItem
