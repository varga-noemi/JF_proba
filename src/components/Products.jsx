import React from 'react'
import { products } from "../data";
import { SingleProduct } from './SingleProduct';

export const Products = () => {
  console.log(products);

  return (
    <div className="container">
      <div className='d-flex justify-content-center gap-3 flex-wrap bg-light '>
        <h4 className='w-100 m-2'>Our Products</h4>
        {products.map(obj=><SingleProduct key={obj.id} {...obj}/>)}
      </div>
    </div>
 )
}

