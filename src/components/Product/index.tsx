import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import IProduct from './IProduct'
import Image from '../Image'

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const hasDiscount = product.discount > 0
  const price = hasDiscount ? product.price * (product.discount / 100) : product.price
  const priceWithoutDiscount = <span className='price-without-discount'>${product.price}</span>
  const discountComponent = hasDiscount ? <li className='discount'>{product.discount}%</li> : null

  return (
    <section key={product._id} className='product'>
      <p className='id'>{product._id}</p>
      <Image src={product.image} />
      <h2>{product.brand}</h2>
      <p>{product.description}</p>
      <aside>
        <ul>
          <li className='price'>
            ${price.toFixed()}
            {
              hasDiscount ? priceWithoutDiscount : null
            }
          </li>
          { discountComponent }
        </ul>
        <div className='icon-pointer'>
          <FontAwesomeIcon className='icon-add-cart' icon={faShoppingCart} />
          AGREGAR
        </div>
      </aside>
    </section>
  )
}

export default Product