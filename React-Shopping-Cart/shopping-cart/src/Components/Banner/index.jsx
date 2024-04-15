import React from 'react'

function index({title,small}) {     
  return (
    <div className='banner'>    
        <div className='banner-content'>    
            <h1>{title}</h1>    
            <p>{small}</p>
        </div>      
    </div>
  )
}

export default index