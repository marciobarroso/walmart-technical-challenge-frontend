import React, { FC } from 'react'
import ProductList from '../ProductList'

import './main.css'
import IProduct from '../Product/IProduct'
import Loading from '../Loading'

const Main: FC<{ products: IProduct[], loading: boolean }> = ({ products, loading }) => {
  if (loading) {
    return (
      <main>
        <Loading loading={loading} />
      </main>
    )
  } else {
    return (
      <main>
        <ProductList products={products} />
      </main>
    )
  }
}

export default Main