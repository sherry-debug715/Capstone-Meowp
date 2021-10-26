import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from '.';
import Button from 'react-bootstrap/Button'


function CreateReviewModal( {businessDetail} ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <Button
            className="write-review"
            variant="danger"
            onClick={() => setShowModal(true)}
            >
                White a Review
            </Button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateReviewForm businessDetail={businessDetail} />
            </Modal>
          )}
        </>
    )
}

export default CreateReviewModal
