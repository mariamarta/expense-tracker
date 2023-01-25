import { useState } from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({ expenseTitle, expenseAmount, expenseDate }) => {

    const [ title, setTitle ] = useState(expenseTitle)

    const changeTitle = () => {

        setTitle('Updated')
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    )

}

export default ExpenseItem
