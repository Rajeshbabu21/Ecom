import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"
// import Shop from "."

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        {/* to navigate the link that is router */}

        {/* syntax
         */}

        {/* to represent the homr page  */}

        <Link to='/'>
        
          <ShoppingCart size={32} />
        </Link>
        {/* cart represent the cart page */}
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}

export default Navbar