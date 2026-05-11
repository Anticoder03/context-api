import React, { useContext } from 'react'
import ProductContext from './context/ProductContext'

const ProductContextView = () => {
  const ctx = useContext(ProductContext) || {}
  const { products = [], loading, error, addProduct } = ctx

  if (loading) return <div>Loading products...</div>
  if (error) return <div>Error loading products: {error}</div>

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.title ?? p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addProduct && addProduct({ title: 'New Product', price: 1.99 })
        }
      >
        Add sample product
      </button>
    </div>
  )
}

export default ProductContextView
