import React, { useEffect, useState , useRef} from 'react';
import {motion} from 'framer-motion';
import '../App.css'
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// gsap.registerPlugin( useGSAP , ScrollTrigger);


function Loader() {



    const [ loader , setLoader ] = useState(false);

    useEffect(() => {
        
        setTimeout(() => {
          setLoader(true);
        }, 2000); 
    
      }, [setLoader]);
    
      const loaderVariants = {
        initial: { y: 0 },
        animate: { y: "-100vh" },
      };

  return (
    <motion.div
        className={`flex justify-center items-center fixed top-0 left-0 z-10 w-full min-h-[100vh] bg-white `} 
        initial="initial"
        animate={loader ? 'animate' : 'initial'}
        variants={loaderVariants}
        transition={{ duration: 1, ease: 'easeInOut' }}
    >
        <p className='akira text-9xl tracking-tight font-black max-[420px]:text-3xl'>JUST DO IT</p>        
    </motion.div>
  )
}

export default Loader
