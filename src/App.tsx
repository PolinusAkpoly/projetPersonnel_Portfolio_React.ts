import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';



import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Apropos from './components/Apropos/Apropos';
import Services from './components/Services/Services';
import Projets from './components/Projets/Projets';
import Contact from './components/Contact/Contact';
import DetailProject from './components/DetailProject/DetailProject';
import Footer from './components/Footer/Footer';



function App() {

  return <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apropos' element={<Apropos />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projets' element={<Projets />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/detailproject/:slug' element={<DetailProject />} />
    </Routes>
    <Footer />
  </div>


  // return (
  //   <div className="App">
  //       {/* <Header />  */}

  //       <Routes>
  //        <Route path='/' element={ <Home />} />
  //        {/* <Route path='/apropos' element={ <Apropos />} />
  //        <Route path='/services' element={ <Services />} />
  //        <Route path='/projets' element={ <Projets />} />
  //        <Route path='/contact' element={ <Contact />} />
  //        <Route path='/detailproject/:slug' element={ <DetailProject />} />  */}
  //       </Routes>

  //       <Footer />
  //   </div>
  // );
}

export default App;
