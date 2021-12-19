import React from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import SingleExpense from '../SingleExpense/SingleExpense';


const ExpenseList = () => {
    const { expenseList: list, query } = useSelector((state) => state.expenses);
    const filteredList = list.filter((item) => item.title.includes(query));
    const notify = () => toast.success("Successfully Deleted Expense.");
    // console.log(expensesList);
    return (
        <div className='mt-5'>
            <ToastContainer
                position="bottom-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            {
                filteredList.length ? filteredList.map(item => <SingleExpense item={item} notify={notify} key={item.title} />) : (
                    <div>
                        <img className='w-1/2 mx-auto mt-24 rounded-2xl' src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" alt="no expense" />
                        <h2 className='mt-5 text-center text-white text-xl'>Your Expense List is Emply!!</h2>
                    </div>
                )
            }
        </div>
    );
};

export default ExpenseList;