import React from "react";

function index({ data ,className}) {
  return (
    <>
      <div key={index} className="Card-wrapper d-flex justify-content-between align-items-center">  
        {data.map((item, index) => {
          return (
            <div key={index} className={`Card text-center ${className}`}>                  
              <div className="card-content d-flex flex-column gap-2 ">  
                <i>{item?.svg}</i>
                <h3>{item?.title}</h3>  
                <p>{item?.ptext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default index;
