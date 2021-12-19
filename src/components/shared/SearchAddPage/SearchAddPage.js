import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../../redux/actions/expenses';

const SearchAddPage = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleQuery = e => {
        setQuery(e.target.value)
        dispatch(searchExpense(e.target.value))
    }
    return (
        <div>
            {
                window.location.pathname === '/' ? <div className="home-search-bar flex justify-between items-center mt-5">
                    <div className="search-box bg-white w-1/2 rounded-full">
                        <i className="fas fa-search pl-2 text-slate-600"></i>
                        <input className=' outline-none ml-2 py-2 border-0' style={{ width: '80%' }} type="text" placeholder='Search expenses' value={query} onChange={(e) => handleQuery(e)} />
                    </div>
                    <div className="add-expense">
                        <Link to='/add-expense'>
                            <button className='border-2 border-white rounded-xl px-3 py-1 text-white'>Add <i className="fas fa-plus"></i></button>
                        </Link>
                    </div>
                </div> : <div className='add-expense-box mt-5'>
                    <div className="buttons flex justify-between items-center">
                        <Link to='/'>
                            <button className='text-white font-semibold text-lg'><i className="fas fa-angle-left"></i> Back</button>
                        </Link>
                        <Link to='/'>
                            <button className='text-white font-semibold text-lg'><i className="far fa-times-circle"></i> Cancel</button>
                        </Link>
                    </div>
                </div>
            }
        </div >
    );
};

export default SearchAddPage;