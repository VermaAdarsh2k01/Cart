import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Item({item , addToCart }) {
    const [isHovered , setIsHovered] = useState(false) 

    return (
    <div 
      className='w-[30vw]' 
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    >
        <img className='w-full' src={item.img}></img>
        
        {isHovered ? 
        <div className={`flex justify-center items-center mt-6`}>
          <motion.button 
            className='bg-black text-white px-4 py-1 rounded-2xl'
            onClick={()=>addToCart(item)}
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{delay: 0.1}}
            >Buy
          </motion.button>
            
        </div>
         :
        <motion.div 
          className='mt-2'
          initial={{opacity: 0}}
          animate={{opacity:1}}
          transition={{delay: 0.1}}
          >
          <h3 className='text-center font-semibold text-zinc-600'>{item.name}</h3>
          <h1 className='text-center font-semibold text-2xl'>{item.title}</h1>
        </motion.div>}
        
        
    </div>  

  )
}

export default Item