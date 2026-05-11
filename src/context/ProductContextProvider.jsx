import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductContext from './ProductContext'

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        if (mounted) setProducts(res.data || [])
      })
      .catch((err) => {
        if (mounted) setError(err.message || 'Failed to fetch products')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { id: Date.now(), ...product }])
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, loading, error }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
    