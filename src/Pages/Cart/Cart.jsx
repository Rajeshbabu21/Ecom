import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import PRODUCTS from '../../product'
import CartItem from './CartItem'
import './cart.css'

import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const isCartEmpty = PRODUCTS.every((product) => cartItems[product.id] === 0)

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart</h1>
      </div>
      {isCartEmpty ? (
        <p>Your cart is empty. Add some products to it!</p>
      ) : (
        <>
          <div className='cartItems'>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />
              }
              return null
            })}
          </div>
          <div className='checkout'>
            <p>Subtotal: ${totalAmount.toFixed(2)}</p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button onClick={() => navigate('/checkout')}>Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
