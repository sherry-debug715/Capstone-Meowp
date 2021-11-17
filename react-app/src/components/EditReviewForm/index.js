import React, { useState } from 'react';
import Portal from '../../portal/Potal';
import EditReviewForm from './EditReviewForm';




function EditReviewModal( {review} ) {

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
        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
            <EditReviewForm review={review} />
        </Portal>
        </>
    )
}

export default EditReviewModal
