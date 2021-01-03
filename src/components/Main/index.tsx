import React from 'react'
import ProductList from '../ProductList'
import products from '../../products'

import './main.css'

const Main = () => {
  return (
    <main>
      <ProductList products={products} />
    </main>
  )
}

export default Main