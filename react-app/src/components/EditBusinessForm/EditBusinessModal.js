import React, { useState } from 'react';
import Portal from '../../portal/Potal';
import EditBusinessForm from './index';
import '../CreateBusinessForm/CreateEditBusiness.css';


function EditBusinessModal( { businessesObj } ){
  const [isOpen, setIsOpen] = useState(false)

  return (
      <>
      <div>
          <button
          className='edit-business-form-btn'
          onClick={() => setIsOpen(true)}
          >
              edit
          </button>
      </div>
        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
          <EditBusinessForm businessesObj={businessesObj} />
        </Portal>
      </>
  )
}

export default EditBusinessModal;
