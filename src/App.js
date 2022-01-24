
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedPage from './Containers/DetailedPage';
import Home from './Containers/Home';
import './App.css';

export const detailPage= "/detail-page";
function App() {
  
  return (
    
     <Router>
       
        <Routes>
         <Route path="/" element={<Home/>} />
          <Route path="/detail-page" element={<DetailedPage />} /> 
        </Routes>
    
    </Router>
   
    
  );
}

export default App;
