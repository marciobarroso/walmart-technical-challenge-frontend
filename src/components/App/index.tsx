import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../Header'
import Main from '../Main'

function App() {
  const API_URL = process.env.API_HOST ? process.env.API_HOST : 'http://api.data-matters.io'

  console.log('call api from : ', API_URL)

  let [products, setProducts] = useState([])
  let [filter, setFilter] = useState('')
  let [page, setPage] = useState(1)

  useEffect(() => {
    call()
  }, [])

  const submit = () => {
    if (isNaN(+filter) && filter.length < 3 ) return
    call()
  }

  const call = () => {
    axios.get(`${API_URL}/api/v1/products?filter=${filter}`)
      .then(response => {
        setProducts(response.data)
      })
  }

  return (
    <div id='app' className="app">
      <Header setFilter={ setFilter } submit={ submit } />
      <Main products={ products }/>
    </div>
  )
}

export default App;
