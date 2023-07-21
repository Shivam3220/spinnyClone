import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { AddDetails, ClearDetails } from "../ReduxStore/actions/UserReduxAction";

const KmDrive = (props) => {
  const {CarDetailsS ,setCarDetailsS,setNavigator} =props


    const HandleClick=(e,value)=>{
      e.preventDefault()
      setCarDetailsS({...CarDetailsS,"kmDrive":value})
      setNavigator(7)
        
    }

  return (
    <>
    
    <div className='w-96 bg-white p-2 shadow rounded'>
      <h4 className='p-2'>km Driven</h4>
    <form  className='grid grid-cols-1 gap-2'>
      <button onClick={(e)=>HandleClick(e,"1-1000km")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>1-1000km</button>

      <button onClick={(e)=>HandleClick(e,"1000-10000km")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span> </span>1000-10000km</button>
      
      <button onClick={(e)=>HandleClick(e,"10000-20000km")}className='bg-gray-200 rounded p-2 shadow border-2 hover:border-black'><span></span>10000-20000km</button>
      
     
    </form>
    </div>
    </>
  )
}

export default KmDrive