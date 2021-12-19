import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const SuccessModal = ({ modalOpen, setModalOpen }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#06B6D4',
            borderRadius: '15px'
        },
    };
    return (
        <div>
            <Modal isOpen={modalOpen} style={customStyles}>
                <div className="modal-box text-center">
                    <h3 className='text-3xl mb-5 mt-5 text-white'>Expense Added Successfully!</h3>
                    <img className='w-1/2 mx-auto rounded-2xl' src="https://image.freepik.com/free-vector/successful-businessman-celebrating-victory_1150-39772.jpg" alt="success modal img" />
                    <Link to='/'>
                        <button className='bg-white mt-5 text-cyan-500 font-semibold px-5 py-1 rounded-full '>Home <i class="fas fa-home"></i></button>
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default SuccessModal;