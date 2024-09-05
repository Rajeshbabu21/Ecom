import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data
  const { cartItems, addToCart, removeFromCart, updateItem } =
    useContext(ShopContext)

  const quantity = cartItems[id] || 0 // Get the quantity of the item from cartItems

  return (
    <div className='cartItem'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <h3>{productName}</h3>
        <p>${price}</p>
        <div className='counthandler'>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type='text'
            value={quantity}
            readOnly
            onChange={(e) => updateItem(Number(e.target.value),id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
