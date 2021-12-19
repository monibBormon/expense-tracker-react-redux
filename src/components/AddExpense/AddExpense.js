import React from 'react';
import SearchAddPage from '../shared/SearchAddPage/SearchAddPage';
import AddExpenseForm from './AddExpenseForm/AddExpenseForm';

const AddExpense = () => {
    return (
        <div className='w-full lg:w-1/2 px-5 lg:px-0 mx-auto'>
            <SearchAddPage />
            <AddExpenseForm />
        </div>
    );
};

export default AddExpense;