import React, { useState, useEffect } from "react";
import Nav from "../src/Components/Nav";
import Header from "../src/Components/Header";
import Banner from "../src/Components/Banner";
import Card from "../src/Components/Card";
import Footer from "../src/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.scss";

const cardDetails = [
  {
    id: 0,
    dimension: "450 * 300",
    badgeTitle: "",
    productCategory: "Fancy Product",
    star: false,
    productPrice: "$40.00 - $80.00",
    crossedPrice: "",
    discountedPrice: "",
    btn: "Add to Cart",
  },
  {
    id: 1,
    dimension: "450 * 300",
    badgeTitle: "Sale",
    productCategory: "Special Item",
    star: true,
    productPrice: "",
    crossedPrice: "$20.00",
    discountedPrice: "$18.00",
    btn: "Add to Cart",
  },
  {
    id: 2,
    dimension: "450 * 300",
    badgeTitle: "Sale",
    productCategory: "Sale Item",
    star: false,
    productPrice: "",
    crossedPrice: "$50.00",
    discountedPrice: "$25.00",
    btn: "Add to Cart",
  },
  {
    id: 3,
    dimension: "450 * 300",
    badgeTitle: "",
    productCategory: "Popular Item",
    star: true,
    productPrice: "$40.00",
    crossedPrice: "",
    discountedPrice: "",
    btn: "Add to Cart",
  },
  {
    id: 4,
    dimension: "450 * 300",
    badgeTitle: "Sale",
    productCategory: "Sale Item",
    star: false,
    productPrice: "",
    crossedPrice: "$50.00",
    discountedPrice: "$25.00",
    btn: "Add to Cart",
  },
  {
    id: 5,
    dimension: "450 * 300",
    badgeTitle: "",
    productCategory: "Fancy Product",
    star: false,
    productPrice: "$120.00 - $280.00",
    crossedPrice: "",
    discountedPrice: "",
    btn: "Add to Cart",
  },
  {
    id: 6,
    dimension: "450 * 300",
    badgeTitle: "Sale",
    productCategory: "Special Item",
    star: true,
    productPrice: "",
    crossedPrice: "$20.00",
    discountedPrice: "$18.00",
    btn: "Add to Cart",
  },
  {
    id: 7,
    dimension: "450 * 300",
    badgeTitle: "",
    productCategory: "Popular Item",
    star: true,
    productPrice: "$40.00",
    crossedPrice: "",
    discountedPrice: "",
    btn: "Add to Cart",
  },
];

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [view, setView] = useState("1440px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setView("1440px");
      } else if (window.innerWidth < 768 && window.innerWidth > 450) {
        setView("768px");
      } else {
        setView("450px");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateCartCount = (increment) => {
    setCartCount(cartCount + increment);
  };

  const resizeDesktop = () => {
    setView("1440px");
  };

  const resizeTab = () => {
    setView("768px");
  };

  const resizeMobile = () => {
    setView("450px");
  };

  return (
    <>
      <div className="container-fluid p-0">
        <Nav
          resizeDesktop={resizeDesktop}
          resizeTab={resizeTab}
          resizeMobile={resizeMobile}
        />
        <Header count={cartCount} />
        <Banner
          title={"Shop in style"}
          small={"With this shop homepage template"}
        />
        <div className="card-container-wrapper">
          <Card content={cardDetails} updateCartCount={updateCartCount} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
