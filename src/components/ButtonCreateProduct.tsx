'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { FormCreateNewProduct } from './FormCreateNewProduct';

export const ButtonCreateProduct = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
        <div className='flex justify-center m-5 w-full'>
            <Button onClick={() => setOpenModal(true)}>Create Product</Button>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FormCreateNewProduct/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Submit</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>   
    </>
  )
}
