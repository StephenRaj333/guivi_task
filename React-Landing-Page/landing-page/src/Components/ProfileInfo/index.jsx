import React from "react";

function index({ data }) {
  return (
    <>
    <div className="overallProfile">
    <h3 className="text-center pb-4">What people are saying...</h3>   
      <div className="proInfo-wrapper">  
        {data?.map((item, index) => {
            console.log(item);  
          return (
            <div className="proInfo" key={index}>       
              <div className="proInfo-content"> 
                <div className="proImg">
                  <img src={item?.src} alt="profile image" />
                </div>
                <div className="proName">{item?.proName}</div>
                <div className="proDesc">{item?.proDesc}</div>
              </div>
            </div>
          );            
        })}             
      </div>        
      </div>
    </>
  );
}

export default index;
