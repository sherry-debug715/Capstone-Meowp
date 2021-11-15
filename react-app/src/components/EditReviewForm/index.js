import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Portal from '../../portal/Potal';
import EditReviewForm from './EditReviewForm';




function EditReviewModal( {review} ) {

    // const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div>
            <button
            className="review-edit-delete-btns"
            onClick={(e) =>
                {
                    e.stopPropagation()
                    setIsOpen(true)}}

            >
                Edit
            </button>
        </div>
        {/* {showModal && (
            <Modal onClose={() =>setShowModal(false)}>
              <EditReviewForm review={review} />
            </Modal>
          )} */}
        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
            <EditReviewForm review={review} />
        </Portal>
        </>
    )
}

export default EditReviewModal
