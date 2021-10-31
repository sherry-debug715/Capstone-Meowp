import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';


function EditReviewModal( {review} ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className="review-edit-delete-btns"
            onClick={(e) =>
                {
                    e.stopPropagation()
                    setShowModal(true)}}

            >
                Edit
            </button>
        </div>
        {showModal && (
            <Modal onClose={() =>setShowModal(false)}>
              <EditReviewForm review={review} />
            </Modal>
          )}
        </>
    )
}

export default EditReviewModal
