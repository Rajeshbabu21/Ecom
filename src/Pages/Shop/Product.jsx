import React from 'react'

const Product = (props) => {
  const { id, productName, price, productImage } = props.data

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <h3>{productName}</h3>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default Product
