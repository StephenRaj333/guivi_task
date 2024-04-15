import React from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { AiOutlineTablet } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";


function index({resizeDesktop,resizeTab,resizeMobile}) {

  return (
    <nav>   
      <div className="nav-container p-0"> 
        <div className="responsive-content d-flex justify-content-center align-items-center"> 
          <div className="active d-flex justify-content-center align-items-center" onClick={resizeDesktop}>     
            <AiOutlineDesktop />
          </div>    
            <div className="d-flex justify-content-center align-items-center" onClick={resizeTab}>
              <AiOutlineTablet />
            </div>
            <div className="d-flex justify-content-center align-items-center" onClick={resizeMobile}>
              <CiMobile3 />
            </div>
        </div>
      </div>
    </nav>  
  );
}

export default index;
