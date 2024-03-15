'use client';

import { Label, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';

export type AddProduct = {
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
}

type ErrorType = {
    title?:string, 
    price?:string
}

type CreateProductFormProps = {
  getDataForm: (product: AddProduct) => void;
}


const FormCreateNewProduct: React.FC<CreateProductFormProps> = ({getDataForm}) => {
    const [product, setProduct] = useState<AddProduct>({
        title: '',
        price: 0,
        description: '',
        image:'https://i.pravatar.cc',
        category: 'electronic'
    })

    useEffect(() => {
      getDataForm(product)
    
    }, [product, getDataForm])
    const [error, setError] = useState<ErrorType>({})
    useEffect(() => {
        const newError:ErrorType = {};
        if(product.title.length && product.title.length <3){
            newError.title = "Title must be at least 3 characters!"
        }
        if(product.price && Number(product.price) <= 0 ){
            newError.price = "Price must be greater than zero"
        }
        setError(newError)
    }, [product.title, product.price]) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target)
        const { id, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [id]: value,
        }));
    };
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product Title" />
        </div>
        <TextInput id="title" type="text" placeholder="Product Name" value={product.title} onChange={handleChange} required />
        {error.title && <p className="text-red-600 text-xs" >{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price" />
        </div>
        <TextInput id="price" type="number" placeholder="Price" value={product.price} onChange={handleChange} required />
        {error.price && <p className="text-red-600 text-xs" >{error.price}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product Description" />
        </div>
        <Textarea id="description"  placeholder="Description Here..." value={product.description} onChange={handleChange} />
      </div>
     
    </form>
  )
}

export default FormCreateNewProduct
