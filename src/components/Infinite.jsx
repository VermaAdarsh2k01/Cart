import React from 'react'
import { motion } from 'framer-motion'




function Infinite() {

    const marqueeVariants = {
        animate: {
          x: [0, -1035],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "linear",
            },
          },
        },
    };
      
  return (
    <div className='w-screen relative m-w-100 px-4 overflow-x-hidden'>
        <motion.div
            className="asbsolute whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
        >
            <h1 className='bg-black text-white'>Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it Just do it</h1>

        </motion.div>

    </div>
  )
}

export default Infinite