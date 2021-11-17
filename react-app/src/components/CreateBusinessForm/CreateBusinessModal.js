import React, { useState } from 'react';
import Portal from '../../portal/Potal';
import CreateBusinessForm from './index';
import '../NavBar/NavBar.css'


function CreateBusinessModal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div>
            <button
            id='create-business-btn'
            onClick={() => setIsOpen(true)}
            >
                Create A New Business
            </button>
        </div>
          <Portal open={isOpen} onClose={() => setIsOpen(false)}>
            <CreateBusinessForm />
          </Portal>
        </>
    )
}

export default CreateBusinessModal
