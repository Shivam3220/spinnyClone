import React from 'react'

const Year = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"year":value})
      setNavigator(3)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>Select Year</h4>
    <form  className='grid grid-cols-3 gap-2'>
      <button onClick={(e)=>HandleClick(e,"2023")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>2023</button>

      <button onClick={(e)=>HandleClick(e,"2022")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>2022</button>
      
      <button onClick={(e)=>HandleClick(e,"2021")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>2021</button>
      
      <button onClick={(e)=>HandleClick(e,"2020")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>2020</button>

      <button onClick={(e)=>HandleClick(e,"2019")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>2019</button>

      <button onClick={(e)=>HandleClick(e,"2018")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>2018</button>
      
     
    </form>
    </div>
    </>
  )
}

export default Year