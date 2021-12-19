import React from 'react';
import { useSelector } from 'react-redux';
import SingleExpense from '../SingleExpense/SingleExpense';

const ExpenseList = () => {
    const { expensesList: list } = useSelector((state) => state.expenses)

    return (
        <div className='mt-5'>
            {
                list ? list.map(item => <SingleExpense key={item.title} item={item} />) : <div>
                    <img className='w-1/2 mx-auto mt-20 rounded-2xl' src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" alt="no expense" />
                    <h2 className='mt-5 text-center text-white text-2xl'>Your Expense List is Emply</h2>
                </div>
            }
        </div>
    );
};

export default ExpenseList;