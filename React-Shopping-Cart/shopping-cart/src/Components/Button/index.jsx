import React from 'react'
import { BsCartFill } from "react-icons/bs";

function index({text,countText,Icon=true,onClick}) {  
  return (
    <div className='button-wrapper'>
      <button onClick={() => onClick(countText)} className='btn d-flex align-items-center justify-content-between gap-2'>  
          {Icon && ( <span><BsCartFill /></span> )} 
          <span> {text} </span>         
          {Icon && ( <span className='counter'>{countText}</span> )}    
      </button>           
    </div>      
  )
}

export default index