import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { addExpense } from '../../../redux/actions/expenses';
import cat from '../Category/Category';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from '../SuccessModal/SuccessModal';
import './AddExpenseForm'

const AddExpenseForm = () => {
    const categories = cat;
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()

    const handleTitle = e => {
        setTitle(e.target.value)
    }
    const handleAmount = e => {
        const value = parseFloat(e.target.value)
        if (isNaN(value)) {
            setAmount('')
            return
        }
        setAmount(value)
    }
    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }
    const handleSubmit = () => {
        if (title === '' || amount === '' || !category) {
            const notify = () => toast("Enter Valid Data");
            notify()
            return
        }
        const data = {
            title,
            amount,
            category,
            creationTime: new Date()
        }
        dispatch(addExpense(data))
        setModalOpen(true)
    }
    return (
        <div>
            <div className="add-expense-form shadow-md shadow-gray-700 mt-5 px-5 py-8">
                {/* alert after submit or <erro></erro>r */}
                <ToastContainer
                    position="bottom-left"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                />
                {/* SuccessModal  */}
                <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <div className="expense-meta mb-2 w-2/3 py-1 rounded">
                    <label htmlFor="title" className='text-white text-2xl ml-1 px-1 rounded mr-2 font-semibold'>Title</label>
                    <input className='outline-none py-1 w-full bg-white rounded-lg mt-1 pl-3 h-10' type="text" placeholder='type a name of your expense' value={title} onChange={(e) => handleTitle(e)} />
                </div>
                <div className="expense-meta mb-2 w-2/3 py-1 rounded">
                    <label htmlFor="amount" className='text-white text-2xl ml-1 px-1 rounded mr-2 font-semibold'>Amount <i className="fas fa-dollar-sign"></i></label>
                    <input className='outline-none py-1 w-full bg-white rounded-lg mt-1 pl-3 h-10' type="text" placeholder='type amount of your expense' value={amount} onChange={(e) => handleAmount(e)} />
                </div>
                <div className="category-items rounded">
                    <div className="category-dropdown w-1/3 text-white font-semibold text-xl" onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label htmlFor="category">{category ? category.title : "Category"}</label>
                        <i className="fas fa-chevron-down ml-3"></i>
                    </div>
                    <div className='rounded'>
                        {
                            categoryOpen && <div className='category-container'>
                                {categories.map(category => <div className='bg-white w-1/3 cursor-pointer' key={category.id} style={{ borderRight: `3px solid ${category.color}` }} onClick={() => handleCategory(category)}>
                                    <label className='px-3 font-semibold py-1 inline-block'>{category.title}</label>
                                    <i className={category.icon}></i>
                                </div>)}
                            </div>
                        }
                    </div>
                </div>
                <div className="add-category-submit-btn">
                    <button onClick={handleSubmit} className='border-2 border-white text-white font-semibold px-8 py-1 rounded mt-10'>Add <i className="far fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    );
};

export default AddExpenseForm;