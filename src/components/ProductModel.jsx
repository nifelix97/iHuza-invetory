import React, { useReducer } from 'react'
import InPuts from './InPuts'
import { useProduct } from '../hooks/useProduct'
import productReducer, { PRODUCT_ACTIONS, initialProductState } from '../reducers/productReducer'

export default function ProductModel({ isOpen, onClose }) {
  const [formState, dispatch] = useReducer(productReducer, initialProductState)
  const { products, setProducts } = useProduct()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch({
      type: PRODUCT_ACTIONS.SET_FIELD,
      payload: { name, value }
    })
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formState.productTitle.trim()) {
      errors.productTitle = 'Product title is required'
    }
    
    if (!formState.productName.trim()) {
      errors.productName = 'Product name is required'
    }
    
    if (!formState.stock) {
      errors.stock = 'Stock status is required'
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    
    if (Object.keys(errors).length > 0) {
      dispatch({
        type: PRODUCT_ACTIONS.SET_ERRORS,
        payload: errors
      })
      return
    }

    const newProduct = {
      id: Date.now(),
      productTitle: formState.productTitle,
      productName: formState.productName,
      createdAt: formState.createdAt || new Date().toISOString().split('T')[0],
      stock: formState.stock,
      productImage: formState.productImage,
      stockquantity: parseInt(formState.stockquantity) || 0
    }

    // Add to products list using your existing context
    setProducts([...products, newProduct])

    // Reset form
    dispatch({ type: PRODUCT_ACTIONS.RESET_FORM })

    // Close modal
    if (onClose) onClose()
  }

  const handleClose = () => {
    dispatch({ type: PRODUCT_ACTIONS.RESET_FORM })
    if (onClose) onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Product</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <InPuts 
            label="Product Title"
            name="productTitle"
            placeholder="Enter product title"
            className="mb-4"
            value={formState.productTitle}
            onChange={handleInputChange}
            variant="primary"
          />
          {formState.errors.productTitle && (
            <p className="text-red-500 text-sm mb-2">{formState.errors.productTitle}</p>
          )}

          <InPuts 
            label="Product Name"
            name="productName"
            placeholder="Enter product name"
            className="mb-4"
            value={formState.productName}
            onChange={handleInputChange}
            variant="primary"
          />
          {formState.errors.productName && (
            <p className="text-red-500 text-sm mb-2">{formState.errors.productName}</p>
          )}

          <InPuts 
            label="Created At"
            name="createdAt"
            type="date"
            className="mb-4"
            value={formState.createdAt}
            onChange={handleInputChange}
            variant="primary"
          />

          <div className="mb-4">
            <label className="text-primary-600 font-medium mb-2 block">Stock Status</label>
            <select
              name="stock"
              value={formState.stock}
              onChange={handleInputChange}
              className="w-full border border-primary-50 rounded-md p-2 bg-primary-200 text-primary-50"
            >
              <option value="">Select stock status</option>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Low Stock">Low Stock</option>
            </select>
            {formState.errors.stock && (
              <p className="text-red-500 text-sm mt-1">{formState.errors.stock}</p>
            )}
          </div>

          <InPuts 
            label="Product Image URL"
            name="productImage"
            placeholder="Enter product image URL"
            className="mb-4"
            value={formState.productImage}
            onChange={handleInputChange}
            variant="primary"
          />

          <InPuts 
            label="Stock Quantity"
            name="stockquantity"
            type="number"
            placeholder="Enter stock quantity"
            className="mb-4"
            value={formState.stockquantity}
            onChange={handleInputChange}
            variant="primary"
          />

          <div className="flex gap-3">
            <button 
              type="submit"
              className="flex-1 bg-primary-800 text-white py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Add Product
            </button>
            <button 
              type="button"
              onClick={handleClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}