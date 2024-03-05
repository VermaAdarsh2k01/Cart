import './App.css'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import { motion } from 'framer-motion'
import Loader from './components/Loader'

function App() {
  
  //toggle cart
  const[cartOpen , setCartOpen] = useState(false)
  
  function toggleCart(){
    setCartOpen(!cartOpen)
  }

  //alert Message
  const[showAlertMessage , setShowAlertMessage] = useState(false)

  //set cart item
  const[cart , setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart , item])
    setShowAlertMessage(true)
    setTimeout( ()=> setShowAlertMessage(false) ,3000) 
    setCartOpen(true)
    setTimeout( ()=> setCartOpen(false) , 1000)
  }

  //remove cart item that uses the cart array
  const removeItem = (itemToRemove) => {
    let newCart = [...cart];
    const index = newCart.findIndex(item => item.id === itemToRemove.id);
  
    if(index !== -1){
      newCart.splice(index, 1)
      setCart(newCart) 
    }
  }
  
  //cart counter
  const [cartCount , setCartCount] = useState(0)

  useEffect( () => {
    setCartCount(cart.length)
  } , [cart])


  //search item
  const [searchItem , setSearchItem] = useState('')
  
  function search(e){ 
    setSearchItem(e.target.value);
  }

  


  return (
    
    <div className='relative'>
      <Loader/>
      <Navbar toggle={toggleCart} cartCount={cartCount} search={search} searchItem={searchItem}/>  
      <Shop addToCart={addToCart} searchItem={searchItem} />
      <Cart isOpen={cartOpen} toggle={toggleCart} cart={cart} removeItem={removeItem}/>
      {showAlertMessage && 
        <motion.div 
          className='fixed top-5 left-1/2 transform -translate-x-[50%] -translate-y-[50%] bg-[#FF0017] px-3 py-1 rounded-2xl text-white'
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100}}
          transition={{ duration: 0.3}}
        >
            Added to Cart!
        </motion.div>
      }
    </div>
  )
}

export default App
