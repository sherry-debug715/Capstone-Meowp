import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from '.';


function EditReviewModal(  ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className="write-review"
            onClick={() => setShowModal(true)}
            >
                edit
            </button>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditReviewForm />
            </Modal>
          )}
        </>
    )
}

export default EditReviewModal
