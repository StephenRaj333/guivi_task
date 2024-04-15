import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Button from "../Button";
import { useEffect } from "react";

function index({ count }) {
  const [showDropDown, setShowDropdown] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView(true); 
      } else {
        setView(false)  
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>  
      {view ? (
        <header class="header">
          <a class="logo">Start Bootstrap</a>   
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon" onClick={() => setShowDropdown(false)}></span>  
          </label>
          <ul class="menu">
            <li>Home</li>
            <li>About</li>
            <li onClick={() => setShowDropdown(!showDropDown)}>
                      Shop
                      <span>
                        {" "}
                        {showDropDown ? (
                          <AiFillCaretUp />
                        ) : (
                          <AiFillCaretDown />
                        )}{" "}
                      </span> 
                      {showDropDown && (
                        <div className="dropdown">
                          <ul className="p-0">
                            <li>All Products</li>
                            <hr className="m-0" />
                            <li>Popular Items</li>
                            <li>New Arrivals</li>
                          </ul>
                        </div>
                      )}
                    </li> 
                     <li>
                      <Button text="Cart" countText={count} />      
                    </li>
          </ul>
        </header>
      ) : (
        <header>
          <div className="header-container">
            <div className="header-content d-flex align-items-center justify-content-between p-3">
              <div className="left-sec d-flex align-items-center gap-5">
                <h3 className="m-0">Start Bootstrap</h3>
                <div className="menu">
                  <ul className="p-0 m-0 d-flex gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li onClick={() => setShowDropdown(!showDropDown)}>
                      Shop
                      <span>
                        {" "}
                        {showDropDown ? (
                          <AiFillCaretUp />
                        ) : (
                          <AiFillCaretDown />
                        )}{" "}
                      </span>
                      {showDropDown && (
                        <div className="dropdown">
                          <ul className="p-0">
                            <li>All Products</li>
                            <hr className="m-0" />
                            <li>Popular Items</li>
                            <li>New Arrivals</li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-sec">
                <Button text="Cart" countText={count} />
              </div>
            </div>
          </div>
        </header>
      )}  
    </> 
  );
}

export default index;
