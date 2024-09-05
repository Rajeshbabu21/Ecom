import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context' // Import ShopContext

const Product = (props) => {
  const { id, productName, price, productImage } = props.data
  const { addToCart,cartItems } = useContext(ShopContext) // Get addToCart from ShopContext
  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <h3>{productName}</h3>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount  > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product
