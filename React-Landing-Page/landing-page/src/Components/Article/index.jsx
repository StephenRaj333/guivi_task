import React from "react";

function index({ className, data }) {
  return (
    <>
      <div className="article-wrapper position-relative">   
        {data?.map((item, index) => {
          return (
            <article className={`d-flex justify-content-between align-items-center ${item.className}`} key={index}>      
              <div className="sec">   
                <div className="sec-content"> 
                    <h3>{item.articleTitle}</h3>
                    <p>{item.articleText}</p>
                </div>
              </div>
              <div className="sec">
                <img src={item.src} alt="banner logo" />    
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default index;
