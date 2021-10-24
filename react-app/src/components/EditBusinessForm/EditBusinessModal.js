import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBusinessForm from './index';


function EditBusinessModal(){
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-business-form'
            onClick={() => setShowModal(true)}
            >
                edit
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditBusinessForm />
            </Modal>
          )}
        </>
    )
}

export default EditBusinessModal;
