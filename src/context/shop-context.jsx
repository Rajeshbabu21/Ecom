import React, { createContext, useState } from 'react'
import PRODUCTS from '../product'

// Create context
export const ShopContext = createContext(null)

// Initialize the default cart
const getDefaultCart = () => {
  let cart = {}
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i] = 0 // Initialize each product's quantity in cart to 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  // Function to add items to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }))
  }

  // Function to remove items from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }))
  }


  const updateItem = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }))
  }

  const getTotalCartAmount = () => {
    let total = 0
    for (const item in cartItems) {
      // Find the product using the item id
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
      if (itemInfo) {
        total += cartItems[item] * itemInfo.price
      }
    }
    return total
  }
  // Define the context value
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  }

  // console.log(cartItems)




  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
