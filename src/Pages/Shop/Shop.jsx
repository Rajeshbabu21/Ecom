import React from 'react'
import PRODUCTS from '../../product'
import Product from './Product'
import "./shop.css"
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Rajesh Tech Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => {
          // Return the Product component while passing the data as props
          return (
            <Product
              key={product.id} // Include a key prop for list rendering
              data={product}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Shop
