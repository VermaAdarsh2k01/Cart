import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../assets/style.css'

function Item({item , addToCart }) {
    const [isHovered , setIsHovered] = useState(false) 


    return (
    <div 
      className='w-[25vw] max-[420px]:w-[40vw]' 
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    >
        <img className='w-full' src={item.img}></img>
        
        {isHovered ? 
        <div className='flex flex-col justify-center items-center mt-2'>
          <motion.div
             onClick={()=>addToCart(item)}
             initial={{opacity: 0}}
             animate={{opacity:1}}
             transition={{delay: 0.1}}
          >
            <button className='bg-black text-white px-4 py-1 rounded-2xl'>Buy</button>
            <div className='price flex items-center justify-center'>Rs.{item.price}</div>
            
          </motion.div>
            
        </div>
         :
        <motion.div 
          className='mt-2'
          initial={{opacity: 0}}
          animate={{opacity:1}}
          transition={{delay: 0.1}}
          >
          <h3 className='text-center font-semibold text-zinc-600 max-[320px]:text-[2vw] max-[420px]:text-[3vw]'>{item.name}</h3>
          <h1 className='text-center title-text font-semibold text-2xl max-[320px]:text-[3vw] max-[420px]:text-[4vw] max-[420px]:leading-none'>{item.title}</h1>
        </motion.div>}
        
        
    </div>  

  )
}

export default Item