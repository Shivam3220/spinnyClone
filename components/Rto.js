import React from 'react'

const Rto = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"rto":value})
      setNavigator(2)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>Popular Cities</h4>
    <form  className='grid grid-cols-3 gap-2'>
      <button onClick={(e)=>HandleClick(e,"Delhi")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Delhi</button>

      <button onClick={(e)=>HandleClick(e,"Mumbai")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Mumbai</button>
      
      <button onClick={(e)=>HandleClick(e,"pune")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>pune</button>
      
      <button onClick={(e)=>HandleClick(e,"Hyderabad")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Hyderabad</button>

      <button onClick={(e)=>HandleClick(e,"Noida")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Noida</button>

      <button onClick={(e)=>HandleClick(e,"Chennai")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>Chennai</button>
      
     
    </form>
    </div>
    </>
  )
}

export default Rto