import React,{useState} from 'react'
import Button from '../Button'

function index({bannerText}) {  
    const [disabled,setDisabled] = useState(true)
  return (  
    <div className='banner-sec'>        
        <div className='banner-content'>
            <h1>{bannerText}</h1>  
            <div className='mt-5'>   
                <div className='form-group d-flex justify-content-center align-items-center'>    
                    <input type="email" onChange={() => setDisabled(false)}  className='form-control w-100 p-3' placeholder='Email Address' />             
                    <Button className="p-3" text="Submit" disabled={disabled} />   
                </div>
            </div>
        </div>
    </div>
  )
}

export default index