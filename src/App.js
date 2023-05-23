import './App.css';
import React, { useEffect } from 'react';

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import Aboutview from './View/Aboutview';
import HomeView from './View/HomeView';
import Solutionview from './View/Solutionview';
import Cources from './Component/Cources/Cources';
import Publication from './Component/Publication/Publication';
import { Routes, Route, } from "react-router-dom"

function App() {

 
  return (
    <div className="App">
      <div className='head'>
      <Header/>
      <Routes>
        <Route path="/" element={ <HomeView/>  } />
        <Route path="about" element={ <Aboutview/>  } />
        <Route path="solution" element={ <Solutionview/> } />
        <Route path='publish' element={ <Publication/> } />
        <Route path='cources' element={ <Cources/> }/>

      </Routes>
      <Footer/> 
     </div>
    </div>
  );
}

export default App;
