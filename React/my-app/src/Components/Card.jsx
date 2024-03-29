import React from 'react';

function Card({content}) {                
  return (          
    <>              
    {content?.map((item,index) => {     
        return (    
        <div key={index} className='card'>      
            <div className='card-header'>   
                <span>{item.type}</span>       
                <h1>$ {item.Price} /month</h1>      
            </div>  
            <div className='card-body'>     
               <div className={`${item.User.status.props.className === "checked" ? "success" : "error"}`}><i>{item.User.status}</i><span>{item.User.user}</span></div>  
               <div className={`${item.Storage.status.props.className === "checked" ? "success" : "error"}`}><i>{item.Storage.status}</i><span>{item.Storage.storage}</span></div>  
               <div className={`${item.PublicProjects.status.props.className === "checked" ? "success" : "error"}`}><i>{item.PublicProjects.status}</i><span>{item.PublicProjects.publicProjects}</span></div> 
               <div className={`${item.Access.status.props.className === "checked" ? "success" : "error"}`}><i>{item.Access.status}</i><span>{item.Access.access}</span></div> 
               <div className={`${item.PrivateProjects.status.props.className === "checked" ? "success" : "error"}`}><i>{item.PrivateProjects.status}</i><span>{item.PrivateProjects.privateProjects}</span></div>  
               <div className={`${item.Support.status.props.className === "checked" ? "success" : "error"}`}><i>{item.Support.status}</i><span>{item.Support.support}</span></div>  
               <div className={`${item.Domain.status.props.className === "checked" ? "success" : "error"}`}><i>{item.Domain.status}</i><span>{item.Domain.domain}</span></div>  
               <div className={`${item.Report.status.props.className === "checked" ? "success" : "error"}`}><i>{item.Report.status}</i><span>{item.Report.report}</span></div> 
            </div>                                                  
            <button disabled={item.Button.status}>{item.Button.text}</button>                   
        </div>      
        )})}        
    </> 
  )
}

export default Card;
