import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ items }) => {

    return (
        <Card className="expenses">
            {items.map(expense => <ExpenseItem key={expense.id} expenseTitle={expense.title} expenseAmount={expense.amount} expenseDate={expense.date} />)}
        </Card>
    )
}

export default Expenses;
