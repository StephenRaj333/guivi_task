import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import AllCourses from './Components/all-courses';
import FullStackDevelopment from './Components/full-stack-development';
import DataScience from './Components/data-science';
import Cyber from './Components/cyber-security';
import CareerAs from './Components/career-as';

const App = () => {   
  return (  
       <> 
        <BrowserRouter>       
          <Routes>      
            <Route path='/' element={<AllCourses />}></Route>   
            <Route path='/fullstack' element={<FullStackDevelopment />}></Route> 
            <Route path='/datascience' element={<DataScience />}></Route> 
            <Route path='/cyber' element={<Cyber />}></Route>   
            <Route path='/career' element={<CareerAs />}></Route> 
          </Routes> 
        </BrowserRouter>
       </>  
  );
};

export default App;
