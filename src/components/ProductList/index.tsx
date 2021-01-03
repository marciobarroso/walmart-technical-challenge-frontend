import React, { FC } from 'react'
import Product from '../Product'
import IProduct from '../Product/IProduct'

import './product-list.css'

const ProductList: FC<{ products: IProduct[] }> = ({ products }) => {
  const items = products.map(product => <Product key={product._id} product={product} />)
  return (
    <div className='products'>
      { items }
    </div>
  )
}

export default ProductList
