import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faChevronDown, faShoppingCart, faCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import Image from '../Image'

import './header.css'

const Header = () => {
  return (
    <header>
      <div className='container-left'>
        <Image className='header-logo' alt='Líder Supermercados' src='/images/lider-logo.svg' />
      </div>
      <div className='container-center'>
        <input className='search-input' type='text' />
        <button className='search-button' type='button'>
          <FontAwesomeIcon className='icon-pointer' icon={faSearch} />
        </button>
      </div>
      <div className='container-right'>
        <div className='container-right-user'>
          <FontAwesomeIcon className='icon-user icon-pointer' icon={faUser} />
          <FontAwesomeIcon className='icon-down-arrow icon-pointer' icon={faChevronDown} />
        </div>
        <div className='container-right-cart'>
          <FontAwesomeIcon className='icon-cart icon-pointer' icon={faShoppingCart} />
          <FontAwesomeIcon className='icon-cart-circle' icon={faCircle} />
          <div className='container-right-cart-items'>
            5
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header