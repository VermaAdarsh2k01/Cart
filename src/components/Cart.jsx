import React from 'react'
import { MdCancel } from "react-icons/md";
import CartImage from '../assets/CartImage.jpg'

function Cart({toggle , isOpen , cart , removeItem}) {
  return (
    <div className={`w-[40vw] h-screen  text-black bg-zinc-800 fixed top-0 right-0 transition-transform  ease-in duration-300 translate-x-0  ${isOpen ? 'translate-x-0' : 'translate-x-full'} p-5 overflow-y-auto rounded-l-xl`} > 
        <div className='relative w-full h-full'>
          <div className='flex justify-end mb-4' onClick={toggle}>
            <MdCancel className= 'fill-zinc-100  text-3xl cursor-pointer'/>
          </div>
          { cart.length === 0 ? (
              <div className=' w-full h-100 flex justify-center items-center text-3xl font-semibold '>
                Cart Is Empty
              </div>
          ) : (
            <div className='w-full h-[80%] flex flex-col gap-2 bg-zinc-100 rounded-xl overflow-x-hidden overflow-y-auto'>
            {cart.map( item  => {
              return(
              <div className='flex items-center justify-between px-4' key={item.id}>
                <div className='flex items-center gap-4'>
                  <img src={item.img} className='w-20'></img>
                  <div>
                    <h1>{item.name}</h1>
                    <h2>{item.title}</h2>
                  </div> 
                </div>
                <div onClick={() => removeItem(item)}>
                  <MdCancel 
                    className= 'fill-zinc-800  text-3xl cursor-pointer'
                    />
                </div>
              </div>
              )
            })}
          </div>
          )}
          {cart.length !== 0 && <button className='w-[90%] py-4 bg-zinc-300 absolute bottom-0 left-1/2 transform -translate-x-[50%] -translate-y-[0%] text-center text-xl rounded-2xl font-bold'>Proceed to Payment</button> }
            
          </div>
    </div>
  )
}

export default Cart