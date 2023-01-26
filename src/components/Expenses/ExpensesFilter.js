import React from 'react';
import './ExpensesFilter.css';

const ExpenseFilter = (props) => {

    const { selected, onChangeFilter } = props;

    const dropdownChangeHandler = (e) => {
        onChangeFilter(e.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selected} onChange={dropdownChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;
