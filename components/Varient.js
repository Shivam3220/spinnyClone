import React from 'react'

const Varient = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"varient":value})
      setNavigator(5)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>Popular varient</h4>
    <form  className='grid grid-cols-3 gap-2'>
      <button onClick={(e)=>HandleClick(e,"Maruti Suzuki Varient")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Maruti Suzuki Varient</button>

      <button onClick={(e)=>HandleClick(e,"Hyundai Varient")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span> </span>Hyundai Varient</button>
      
      <button onClick={(e)=>HandleClick(e,"Honda Varient")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Honda Varient</button>
      
      <button onClick={(e)=>HandleClick(e,"Renault Varient")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span> </span>Renault Varient</button>

      <button onClick={(e)=>HandleClick(e,"Tata Varient")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Tata Varient</button>

      <button onClick={(e)=>HandleClick(e,"Ford Varient")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Ford Varient</button>
      
     
    </form>
    </div>
    </>
  )
}

export default Varient