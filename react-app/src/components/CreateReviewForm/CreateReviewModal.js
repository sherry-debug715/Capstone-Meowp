import React, { useState } from 'react';
import Portal from '../../portal/Potal';
import CreateReviewForm from '.';
import Button from 'react-bootstrap/Button'


function CreateReviewModal( {businessDetail} ) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div>
            <Button
            className="write-review"
            variant="danger"
            onClick={() => setIsOpen(true)}
            >
                Write a Review
            </Button>
        </div>
          <Portal open={isOpen} onClose={() => setIsOpen(false)}>
            <CreateReviewForm businessDetail={businessDetail} />
          </Portal>
        </>
    )
}

export default CreateReviewModal
