import React from "react";
import Header from '../header'
const data = [
  {   
    id: 1,
    imageSrc: "https://picsum.photos/200",
    title: "Data Science", 
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 1",
    buttonLink: "#",
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/id/237/200/300",
    title: "Career",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 2",
    buttonLink: "#",
  },
  {
    id: 3,
    imageSrc: "https://picsum.photos/id/237/200/300",
    title: "Career",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 3",
    buttonLink: "#",
  },
  {
    id: 4,
    imageSrc: "https://picsum.photos/200",
    title: "Data Science",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 4",
    buttonLink: "#",
  },
  {
    id: 5,
    imageSrc: "https://picsum.photos/200",
    title: "Data Science",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 5",
    buttonLink: "#",
  },
  {
    id: 6,
    imageSrc: "https://picsum.photos/200/300/?blur",
    title: "Cyber Security",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 6",
    buttonLink: "#",
  },
  {
    id: 7,
    imageSrc: "https://picsum.photos/200/300/?blur",
    title: "Cyber Security",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 7",
    buttonLink: "#",
  },
  {
    id: 8,
    imageSrc: "https://picsum.photos/200/300/?blur",   
    title: "Cyber Security",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 8",
    buttonLink: "#",
  },
  {
    id: 9,
    imageSrc: "https://picsum.photos/id/237/200/300",   
    title: "Career",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 8",
    buttonLink: "#",
  },
  {
    id: 10,
    imageSrc: "https://picsum.photos/id/237/200/300",   
    title: "Career",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 8",
    buttonLink: "#",
  },
  {
    id: 11,
    imageSrc: "https://picsum.photos/200/300.jpg",   
    title: "full stack development",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 8",
    buttonLink: "#",
  },
  {
    id: 12,
    imageSrc: "https://picsum.photos/200/300.jpg",   
    title: "full stack development",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 8",
    buttonLink: "#",
  },
  {
    id: 13,
    imageSrc: "https://picsum.photos/200/300.jpg",  
    title: "full stack development",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "Go somewhere 8",
    buttonLink: "#",
  },  
];

function AllCourses() {
  return (
    <>
    <Header />     
      <div style={{display: "flex",alignItems: "center",gap: "30px",flexWrap:"wrap"}}>  
        {data?.map((item,index) => {
          return (
            <div key={index} className="card" style={{width: "300px"}}>     
              <img className="card-img-top" src={item.imageSrc} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p> 
                <a href="#" className="btn btn-primary">{item.buttonText}</a> 
              </div>    
            </div>  
          );  
        })} 
      </div>
    </> 
  );
}

export default AllCourses;
