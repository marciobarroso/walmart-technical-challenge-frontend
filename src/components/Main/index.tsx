import React, { FC } from 'react'
import ProductList from '../ProductList'

import './main.css'
import IProduct from '../Product/IProduct'

const Main: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <main>
      <ProductList products={products} />
    </main>
  )
}

export default Main