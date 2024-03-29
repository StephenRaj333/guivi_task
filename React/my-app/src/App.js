import React from 'react';
import './App.css';
import Card from './Components/Card';
import { IoIosClose } from "react-icons/io";
import { BiCheck } from "react-icons/bi";

const Success = <BiCheck className='checked' />;  

const Failed = <IoIosClose className='unchecked' />;    

const CardDetails = [ 
  {
      type : 'FREE',
      Price : 0,
      User : {status: Success , user: "Single User"}, 
      Storage : {status : Success,storage:"50GB Storage"},
      PublicProjects : {status: Success ,publicProjects : "Unlimited Public Projects"},
      Access : {status :Success ,access:"Community Access"},
      PrivateProjects : {status : Failed,privateProjects:'Unlimited Private Projects'},
      Support : {status : Failed,support:"Dedicated Phone Support"},
      Domain : {status : Failed,domain:"Free Subdomain"},
      Report : {status: Failed,report:"Monthy Status Report"},
      Button : {status : true,text:"Button"}
  },  
  {
    type : 'PLUS',
    Price : 9,
    User : {status: Success, user: "5 Users"},  
    Storage : {status : Success ,storage:"50GB Storage"},
    PublicProjects : {status: Success ,publicProjects : "Unlimited Public Projects"},
    Access : {status :Success ,access:"Community Access"},
    PrivateProjects : {status : Success,privateProjects:'Unlimited Private Projects'},
    Support : {status : Success,support:"Dedicated Phone Support"}, 
    Domain : {status : Success,domain:"Free Subdomain"},
    Report : {status: Failed,report:"Monthy Status Reports"},
    Button : {status : true,text:"Button"}
  },
  {
    type : 'PRO',
    Price : 49,
    User : {status: Success, user: "Unlimited Users"},  
    Storage : {status : Success ,storage:"50GB Storage"},
    PublicProjects : {status: Success ,publicProjects : "Unlimited Public Projects"},
    Access : {status :Success ,access:"Community Access"},
    PrivateProjects : {status : Success,privateProjects:'Unlimited Private Projects'},
    Support : {status : Success,support:"Dedicated Phone Support"},
    Domain : {status : Success,domain:"Free Subdomain"},
    Report : {status: Success,report:"Monthy Status Reports"},  
    Button : {status : false ,text:"Button"} 
  }       
]         



function App() {  
  return (  
    <div className="container">     
        <Card content={CardDetails}  />     
    </div>      
  );
}

export default App; 
