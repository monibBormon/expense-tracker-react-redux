import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container w-full px-5 lg:px-0 lg:w-1/2 mx-auto py-3 items-center'>
            <div className="header flex justify-between items-center">
                <div className="logo text-2xl lg:text-3xl font-semibold text-white">
                    <Link to='/'>
                        Expense <span className='text-black'>Tracker.</span>
                    </Link>
                </div>
                <div className="nav">
                    <h2 className='text-white font-semibold text-lg'>Login/Register</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;