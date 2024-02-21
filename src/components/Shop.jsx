import React from 'react'
import Item from './Item'
import SailAndTeamRed from '../assets/women-s-air-max-1-87-sail-and-team-red-fj3169-100-release-date.jpg'
import LunarRoam from "../assets/lunar-roam-platinum-tint-and-desert-moss-dv2440-001-release-date.jpg"
import TerminatorHigh from "../assets/terminator-high-black-and-light-pumice-fj4198-001-release-date.jpg"
import Cortez from "../assets/cortez-light-orewood-brown-fz4630-100-release-date.jpg"
import AirJordans2Low from '../assets/air-jordan-2-low-python-dv9956-100-release-date.jpg'
import AcgAir from '../assets/acg-air-exploraid-phantom-and-sail-fj1920-100-release-date.jpg'
import Attack from '../assets/attack-oil-green-and-ironstone-fn0648-300-release-date.jpg'
import Cacao from '../assets/women-s-air-jordan-1-high-cacao-wow-and-sand-drift-fq2941-200-release-date.jpg'
import luckyGreen from '../assets/women-s-air-jordan-5-lucky-green-dd9336-103-release-date.jpg'



const itemsArray = [
  {
    id:1,
    name:"Women's Air Max 1 '87",
    img: SailAndTeamRed,
    title:'Sail and Team Red'
  },
  {
    id:2,
    name:"Lunar Roam",
    img: LunarRoam,
    title:'Platinum Tint and  Moss'
  },
  {
    id:3,
    name:"Terminator High",
    img: TerminatorHigh,
    title:'Black and Light Pumice'
  },
  {
    id:4,
    name:"Cortez",
    img: Cortez,
    title:'Light OreWood Brown'
  },
  {
    id:5,
    name:"Air Jordans 2 Low",
    img: AirJordans2Low,
    title:'Python'
  },
  {
    id:6,
    name:"ACG Air Exploraid",
    img: AcgAir,
    title:'Phantom And Sail'
  },
  {
    id:7,
    name:"Attack",
    img: Attack,
    title:'Oil Green and Ironstone'
  },
  {
    id:8,
    name:"Women's Air Jordan 1 High",
    img: Cacao,
    title:'Cacao Wow and Sand Drift'
  },
  {
    id:9,
    name:"Women's Air Jordan 5",
    img: luckyGreen,
    title:'Lucky Green'
  }
]

function Shop( {addToCart , searchItem}) {
  
  const filteredItems = searchItem ? itemsArray.filter( 
    item=> item.name.toLocaleLowerCase().includes(searchItem.toLowerCase())) : itemsArray;

  return (
    <div className='relative'>    
      {/* <div className='w-full h-screen bg-gradient-to-t from-white/70 from-2% fixed pointer-events-none'></div> */}
      <div className='max-w-full min-h-full p-6'>  
        <div className='flex gap-5 flex-wrap justify-center'>
          {filteredItems.map( item => {
            return <Item item={item} key={item.id} addToCart={addToCart}/>
          })}
        </div>
      </div>
    </div>

  )
}

export default Shop


{/* <div className='max-w-full min-h-full p-7 relative'>
      
      <div className='flex gap-1 flex-wrap justify-around'>
        {filteredItems.map( item => {
          return <Item item={item} key={item.id} addToCart={addToCart}/>
        })}
      </div>
    </div> */}