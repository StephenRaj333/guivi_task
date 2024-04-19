import React from 'react'
import Button from 'react-bootstrap/Button';

function index({text,className,disabled}) {    
  return (    
    <div className='button-wrapper'>    
      <Button variant="primary" className={className} disabled={disabled}>{text}</Button>  
    </div>    
  ) 
} 

export default index;   