import React from 'react'


const Brand = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"brand":value})
      setNavigator(1)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>Popular Brand</h4>
    <form  className='grid grid-cols-3 gap-2'>
      <button onClick={(e)=>HandleClick(e,"Maruti Suzuki")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span><img src="https://media.spinny.com/spinny-web/media/cars/makes/maruti-suzuki/logos/197x71.png" className='w-36' /></span>Maruti Suzuki</button>

      <button onClick={(e)=>HandleClick(e,"Hyundai")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span><img src="https://media.spinny.com/spinny-web/media/cars/makes/hyundai/logos/197x71.png" className='w-36' /></span>Hyundai</button>
      
      <button onClick={(e)=>HandleClick(e,"Honda")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span><img src="https://media.spinny.com/spinny-web/media/cars/makes/honda/logos/197x71.png" className='w-36' /></span>Honda</button>
      
      <button onClick={(e)=>HandleClick(e,"Renault")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span><img src="https://media.spinny.com/spinny-web/media/cars/makes/renault/logos/197x71.png" className='w-36' /></span>Renault</button>

      <button onClick={(e)=>HandleClick(e,"Tata")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span><img src="https://media.spinny.com/spinny-web/media/cars/makes/tata/logos/197x71.png"  className='w-36' /></span>Tata</button>

      <button onClick={(e)=>HandleClick(e,"Ford")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span><img src="https://media.spinny.com/spinny-web/media/cars/makes/ford/logos/197x71.png" className='w-36' /></span>Ford</button>
      
     
    </form>
    </div>
    </>
  )
}

export default Brand