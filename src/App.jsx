import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Shop from "./Pages/Shop/Shop"
import Cart from "./Pages/Cart/Cart"
function App() {
  return (
    <div className='App'
    >
{/* to make the hole div */}
      <Router>
        {/* keep on changinh */}
        {/* this outside is not change this will keep on chage */}
        <Navbar/>  
        <Routes>
          {/* path to homr page */}
          <Route path='/' element = {<Shop/>}/>
          {/* path to cart page */}
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </Router>



    </div>
  )
}

export default App