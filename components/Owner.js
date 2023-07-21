import React from 'react'

const Owner = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"owner":value})
      setNavigator(6)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>Select Owner</h4>
    <form  className='grid grid-cols-1 gap-2'>
      <button onClick={(e)=>HandleClick(e,"1st Owner")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>1st Owner</button>

      <button onClick={(e)=>HandleClick(e,"2nd Owner")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span> </span>2nd Owner</button>
      
      <button onClick={(e)=>HandleClick(e,"3rd Owner")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>3rd Owner</button>
      
     
    </form>
    </div>
    </>
  )
}

export default Owner