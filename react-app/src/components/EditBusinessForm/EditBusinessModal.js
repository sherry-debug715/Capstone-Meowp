import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBusinessForm from './index';
import '../CreateBusinessForm/CreateEditBusiness.css';


function EditBusinessModal( { businessesObj } ){
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-business-form-btn'
            onClick={() => setShowModal(true)}
            >
                edit
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditBusinessForm businessesObj={businessesObj} />
            </Modal>
          )}
        </>
    )
}

export default EditBusinessModal;
