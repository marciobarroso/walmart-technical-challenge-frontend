import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../Header'
import Main from '../Main'

function App() {
  const API_URL = process.env.API_HOST ? process.env.API_HOST : 'http://api.data-matters.io'

  let [products, setProducts] = useState([])
  let [filter, setFilter] = useState('')
  let [loading, isLoading] = useState(true)
  
  useEffect(() => {
    call()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submit = () => {
    if (isNaN(+filter) && filter.length < 3 ) return
    call()
  }

  const call = () => {
    isLoading(true)
    axios.get(`${API_URL}/api/v1/products?filter=${filter}`)
      .then(response => {
        setProducts(response.data)
        isLoading(false)
      })
  }

  return (
    <div id='app' className="app">
      <Header setFilter={ setFilter } submit={ submit } />
      <Main products={ products } loading={ loading } />
    </div>
  )
}

export default App;
