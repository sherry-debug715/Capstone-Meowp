import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateBusinessForm from './index';

function CreateBusinessModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='create-business-form'
            onClick={() => setShowModal(true)}
            >
                Create A New Business
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateBusinessForm />
            </Modal>
          )}
        </>
    )
}

export default CreateBusinessModal
