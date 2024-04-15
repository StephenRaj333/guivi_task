import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button";

function Index({ content, updateCartCount }) {
  const [data, setData] = useState(content);

  const handleClick = (index) => {
    const updatedData = data.map((item, idx) => {
      if (idx === index) {  
        if (item.btn === "Add to Cart") {
          updateCartCount(1); 
          return { ...item, btn: "Remove from Cart" };
        } else {
          updateCartCount(-1);
          return { ...item, btn: "Add to Cart" };
        }
      } else {
        return item;
      }
    });
    setData(updatedData);
  };  

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div className="card-wrapper" key={index}>
            <div className="card">
              <div className="card-header">
                {item.dimension && <h4>{item.dimension}</h4>}
                {item.badgeTitle && <span>{item.badgeTitle}</span>}
              </div>
              <div className="card-body">
                {item.productCategory && <h5>{item.productCategory}</h5>}
                {item.star && (
                  <span className="start d-flex justify-content-center align-items-center mb-1">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                )}

                {item.productPrice && <p className="mb-2">{item.productPrice}</p>}
                <div className="d-flex justify-content-center align-items-center gap-1 mb-1">
                  {item.crossedPrice && (
                    <p className="crossed mb-0 text-muted">
                      {item.crossedPrice}
                    </p>
                  )}

                  {item.discountedPrice && (
                    <p className="discountedPrice mb-0">
                      {item.discountedPrice}
                    </p>
                  )}
                </div>
              </div>
              <div className="card-footer bg-none">
                <Button
                  Icon={false}
                  text={item.btn}
                  style={{ textAlign: "center" }}
                  onClick={() => handleClick(index)}
                />
              </div>
            </div>
          </div>  
        );  
      })}
    </>
  );
}

export default Index;
