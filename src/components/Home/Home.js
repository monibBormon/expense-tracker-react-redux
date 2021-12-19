import React from 'react';
import SearchAddPage from '../shared/SearchAddPage/SearchAddPage';
import ExpenseList from './ExpenseList/ExpenseList';

const Home = () => {
    return (
        <div className='w-full px-5 lg:px-0 lg:w-1/2 mx-auto'>
            <SearchAddPage />
            <ExpenseList />
        </div>
    );
};

export default Home;