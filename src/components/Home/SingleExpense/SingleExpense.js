import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../../redux/actions/expenses';

const SingleExpense = ({ item, notify }) => {
    const time = moment(item.creationTime).fromNow()
    const dispatch = useDispatch();

    // console.log(item);

    const handleDelete = () => {
        dispatch(deleteExpense(item))
        notify()
    }
    return (
        <div className='expense box flex justify-between bg-white my-3 px-3 py-1 rounded' style={{ borderRight: `4px solid ${item.category.color}` }}>
            <div className="expense-left flex">
                <span className='text-lg mt-1'><i className={item.category.icon}></i></span>
                <div className='flex flex-1 flex-col ml-3'>
                    <h4 className='text-lg font-semibold'>{item.title}</h4>
                    <p className='text-gray-500 text-xs'>{time}</p>
                </div>
            </div>
            <div className="expense-right flex flex-col-reverse items-end justify-between">
                <div className="div">
                    <h4 className='font-semibold text-lg'><i className="fas fa-dollar-sign"></i> {item.amount}</h4>
                </div>
                <div className="delete-icon cursor-pointer" onClick={handleDelete} title='Want to delete?'>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    );
};

export default SingleExpense;