import React, { useEffect, useState } from 'react'
import { CardConponent } from './Card/CardConponent'
import { LoadingComponent } from '../Loader/LoadingComponent'
import { ButtonCreateProduct } from '../ButtonCreateProduct'

export type Products = {
  readonly id?:number,
  title:string,
  description:string,
  image:string
}

const HomeComponent = () => {
  const [getProduct, setGetProduct] = useState<Products[]>() 
  const [loading, setLoading] = useState(false)
  async function fetchData(){
    try {
        const fetchProduct = await fetch("https://fakestoreapi.com/products")
        const res = await fetchProduct.json()
        console.log(res)
        setGetProduct(res)
    } catch (error) {
       console.log("Error", error) 
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <ButtonCreateProduct/>
        {loading ? (
          <LoadingComponent/>
          ) : (
            <div className="flex justify-center gap-4 flex-wrap">
            {getProduct?.map((pro, index) => (
            
              <CardConponent 
                image={pro.image} 
                title={pro.title} 
                key={index}
                description={pro.description} />
          ))}
          </div>
        )}   
      </div>
    </>
  )
}

export default HomeComponent