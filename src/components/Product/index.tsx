import React, { FC } from 'react'

import IProduct from './IProduct'
import Image from '../Image'

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const hasDiscount = product.discount > 0
  const price = hasDiscount ? product.price * (product.discount / 100) : product.price
  const priceWithoutDiscount = <span className='price-without-discount'>${product.price}</span>
  const discountComponent = hasDiscount ? <li className='discount'>{product.discount}%</li> : null

  return (
    <section key={product._id} className='product'>
      <Image src={product.image} />
      <h2>{product.brand}</h2>
      <p>{product.description}</p>
      <aside>
        <ul>
          <li className='price'>
            ${price}
            {
              hasDiscount ? priceWithoutDiscount : null
            }
          </li>
          { discountComponent }
        </ul>
      </aside>
    </section>
  )
}

export default Product