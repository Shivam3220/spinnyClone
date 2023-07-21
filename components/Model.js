import React from 'react'

const Model = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"model":value})
      setNavigator(4)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>Popular MODEL</h4>
    <form  className='grid grid-cols-3 gap-2'>
      <button onClick={(e)=>HandleClick(e,"Maruti Suzuki Modal")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Maruti Suzuki Modal</button>

      <button onClick={(e)=>HandleClick(e,"Hyundai Modal")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span> </span>Hyundai Modal</button>
      
      <button onClick={(e)=>HandleClick(e,"Honda Modal")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Honda Modal</button>
      
      <button onClick={(e)=>HandleClick(e,"Renault Modal")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span> </span>Renault Modal</button>

      <button onClick={(e)=>HandleClick(e,"Tata Modal")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Tata Modal</button>

      <button onClick={(e)=>HandleClick(e,"Ford Modal")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Ford Modal</button>
      
     
    </form>
    </div>
    </>
  )
}

export default Model