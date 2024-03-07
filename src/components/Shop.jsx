import React, { useState ,useEffect } from 'react'
import Item from './Item'
import SailAndTeamRed from '../assets/women/women-s-air-max-1-87-sail-and-team-red-fj3169-100-release-date.jpg'
import LunarRoam from "../assets/women/lunar-roam-platinum-tint-and-desert-moss-dv2440-001-release-date.jpg"
import TerminatorHigh from "../assets/women/terminator-high-black-and-light-pumice-fj4198-001-release-date.jpg"
import Cortez from "../assets/women/cortez-light-orewood-brown-fz4630-100-release-date.jpg"
import AirJordans2Low from '../assets/women/air-jordan-2-low-python-dv9956-100-release-date.jpg'
import AcgAir from '../assets/women/acg-air-exploraid-phantom-and-sail-fj1920-100-release-date.jpg'
import Attack from '../assets/women/attack-oil-green-and-ironstone-fn0648-300-release-date.jpg'
import Cacao from '../assets/women/women-s-air-jordan-1-high-cacao-wow-and-sand-drift-fq2941-200-release-date.jpg'
import luckyGreen from '../assets/women/women-s-air-jordan-5-lucky-green-dd9336-103-release-date.jpg'
import AirJor1LowMen from '../assets/men/air-jordan-1-low-se-shoes-WSkjPL.jpg'
import AirMax1Men from '../assets/men/air-max-1-shoes-ZCSX34.jpg'
import DunkLowRetroMen from '../assets/men/dunk-low-retro-se-shoes-RSrHtr.jpg'
import DunkLow2Men from '../assets/men/dunk-low-retro-shoes-69h36X.jpg'
import JordanSpizikeMen from '../assets/men/jordan-spizike-low-shoes-pBZk7c.jpg'
import Slider from '@mui/material/Slider'



const itemsArray = [
  {
    id:1,
    name:"Women's Air Max 1 '87",
    img: SailAndTeamRed,
    title:'Sail and Team Red',
    category:"Women",
    price:14995
  },
  {
    id:2,
    name:"Lunar Roam",
    img: LunarRoam,
    title:'Platinum Tint and  Moss',
    category:"Women",
    price:14995
  },
  {
    id:3,
    name:"Terminator High",
    img: TerminatorHigh,
    title:'Black and Light Pumice',
    category:"Women",
    price:14995
  },
  {
    id:4,
    name:"Cortez",
    img: Cortez,
    title:'Light OreWood Brown',
    category:"Women",
    price:14995
  },
  {
    id:5,
    name:"Air Jordans 2 Low",
    img: AirJordans2Low,
    title:'Python',
    category:"Women",
    price:14995
  },
  {
    id:6,
    name:"ACG Air Exploraid",
    img: AcgAir,
    title:'Phantom And Sail',
    category:"Women",
    price:14995
  },
  {
    id:7,
    name:"Attack",
    img: Attack,
    title:'Oil Green and Ironstone',
    category:"Women",
    price:14995
  },
  {
    id:8,
    name:"Women's Air Jordan 1 High",
    img: Cacao,
    title:'Cacao Wow and Sand Drift',
    category:"Women",
    price:14995
  },
  {
    id:9,
    name:"Women's Air Jordan 5",
    img: luckyGreen,
    title:'Lucky Green',
    category:"Women",
    price:14995
  },
  {
    id:10,
    name:"Air Jordans 1 Low se",
    img: AirJor1LowMen,
    title:'Cowboy brown',
    category:"Men",
    price:10295
  },
  {
    id:11,
    name:"Nike Air Max 1",
    img: AirMax1Men,
    title:'Pepper and Salt',
    category:"Men",
    price:12795
  },
  {
    id:12,
    name:"Nike Dunk Low Retro SE",
    img: DunkLowRetroMen,
    title:'Moonlight Grey',
    category:"Men",
    price:10795
  },
  {
    id:13,
    name:"Nike Dunk Low Retro",
    img: DunkLow2Men,
    title:'Court Green',
    category:"Men",
    price:8695
  },
  {
    id:14,
    name:"Men's Air Jordan 5",
    img: JordanSpizikeMen,
    title:'The Spizike',
    category:"Men",
    price:14995
  }
]

function Shop( {addToCart , searchItem }) {

  const[items , setItems] = useState(itemsArray)

  const[range , setRange] = useState([0 , 30000]);

  const handleRangeChange = (e , newValue) => {
    setRange(newValue);
  };
  

  const [isMenChecked , setIsMenChecked] = useState(false)

  const handleMenChecked = () => {
    setIsMenChecked(prev => !prev)
    
  }


  const [isWomenChecked , setIsWomenChecked] = useState(false)
    
  const handleWomenChecked = () => {
    setIsWomenChecked(prev => !prev)
  }

  
  useEffect( () => {
    let filteredItems = searchItem ? itemsArray.filter( 
      item=> item.name.toLocaleLowerCase().includes(searchItem.toLowerCase())) : itemsArray;
    
    if(isMenChecked || isWomenChecked) {
      filteredItems = itemsArray.filter(item => (isMenChecked && item.category === 'Men') || (isWomenChecked && item.category === 'Women'))
    }

    filteredItems = filteredItems.filter( item => item.price <= range[1] && item.price >= range[0] )


    setItems(filteredItems)

  } , [searchItem , isMenChecked , isWomenChecked , range]);

  return (
    <div className='relative'>    
      <div className='max-w-full min-h-full p-6 flex max-[425px]:p-1 max-[425px]:gap-5 max-[625px]:flex-col max-[525px]:items-center max-[625px]:gap-8'>  
        <div className='filter-container w-[15vw] flex flex-col border-2 rounded-2xl p-5 h-full max-[425px]:w-[98vw] max-[425px]:px-3 max-[625px]:w-[92vw]'>
            <div className='flex flex-col gap-2 text-lg max-[425px]:gap-1 '>
              <div className='w-full border-b-2 max-[425px]:flex max-[600px]:flex max-[600px]:mr-auto '>
                <h1 className='w-full font-bold text-gray-400'>Gender</h1>
                  <div className='w-full flex gap-2 items-center'>  
                    <label className='m-1 max-[425px]:mr-2' >
                      <input type='checkbox' name='Men' checked={isMenChecked} onChange={handleMenChecked} className='mr-1'/>
                      Men
                    </label>
                  </div>
                  <div className='w-full flex gap-2'>  
                    <label className='m-1'>
                      <input type='checkbox' name='Women' checked={isWomenChecked} onChange={handleWomenChecked} className='mr-1'/>
                      Women
                    </label>
                  </div>
              </div>
              <div className='flex flex-col max-[425px]:flex'>
              <h1 className='w-full font-bold text-gray-400 mb-2 max-[425px]:w-[30vw]'>Range</h1>
                <div className='px-2 pr-5 w-full h-[4vh] '>
                  <Slider
                      size='small'
                      value={range}
                      onChange={handleRangeChange}
                      valueLabelDisplay="auto"
                      marks
                      shiftStep={10000}
                      step={10000}
                      min={0}
                      max={30000}
                  />
                </div>
                <div className='h-[3vh] flex justify-between text-[0.9vw] max-sm:text-[4vw] '>
                  <span className=''>Rs. 0</span>
                  <span>Rs. 30,000</span>
                </div>
              </div>
            </div>
        </div>
        <div className='items-container w-[90vw] flex gap-5 flex-wrap justify-center'>
          {items.map( item => {
            return <Item item={item} key={item.id} addToCart={addToCart}/>
          })}
        </div>

      </div>
    </div>

  )
}

export default Shop

