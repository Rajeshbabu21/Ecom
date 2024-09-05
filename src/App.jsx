import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import ShopContextProvider from './context/shop-context' // Make sure this import is correct

function App() {
  return (
    <div className='App'>
      {/* to make the whole div */}

      <ShopContextProvider>
        <Router>
          {/* Static Navbar */}
          <Navbar />
          <Routes>
            {/* Route to home page */}
            <Route path='/' element={<Shop />} />
            {/* Route to cart page */}
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
