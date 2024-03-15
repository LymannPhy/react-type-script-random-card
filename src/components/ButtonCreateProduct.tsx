'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import FormCreateNewProduct, { AddProduct } from './FormCreateNewProduct';

export const ButtonCreateProduct = () => {
    const [openModal, setOpenModal] = useState(false);

    function getDataForm(product:AddProduct){
      console.log(product)
    }

    async function createNewProduct(){
      try {
        const postProduct = await fetch('https://fakestoreapi.com/products',{
          method:"POST",
          body:JSON.stringify(
              {
                  getDataForm
              }
          )
        })
        const res = await postProduct.json()
        console.log(res)
      } catch (error) {
        console.log(error)
      } finally {
        setOpenModal(false)
      }
    }

  return (
    <>
        <div className='flex justify-center m-5 w-full'>
            <Button onClick={() => setOpenModal(true)}>Create Product</Button>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FormCreateNewProduct getDataForm={getDataForm}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ createNewProduct }>Submit</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>   
    </>
  )
}
