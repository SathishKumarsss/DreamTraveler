import React from 'react';

import Navbar from './Components/Navbar';
import ImgTopbar from './Components/Imagebar';
import Myservice from './Components/Services';
import Places from './Components/Places';
import Testimonials from './Components/Testimonials';
import AboutUs from './Components/About';
import Footer from './Components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='Imagebar' element={<ImgTopbar/>}/>
          <Route path='Services' element={<Myservice/>}/>
          <Route path='Places' element={<Places/>}/>
          <Route path='Testimonials' element={<Testimonials/>}/>
          <Route path='About' element={<AboutUs/>}/>
          <Route path='Footer' element={<Footer/>}/>
        </Routes>
        </Router>
      
      
  



     




  
</div>
  );
}
export default App;