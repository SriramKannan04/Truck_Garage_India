import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import MenuBar from './MenuBar';
import Homepage from './Homepage';

import TruckTata from './TruckTata';
import TruckMahindra from './TruckMahindra';
import TruckBharatBenz from './TruckBharatBenz';
import TruckEicher from './TruckEicher';
import TruckAL from './TruckAL';

import Contact from './Contact';
import About from './About';

function Redirector() 
{
  return <Navigate to="/Homepage" />
}

function App() { 
  return (
    <div>
      <Router>
        <MenuBar />
        <Routes>
          
          <Route path="/" element={<Redirector />} />

          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/About" element={<About />} />

          <Route path="/TruckTata" element={<TruckTata />} />
          <Route path="/TruckMahindra" element={<TruckMahindra />} />
          <Route path="/TruckBharatBenz" element={<TruckBharatBenz />} />
          <Route path="/TruckEicher" element={<TruckEicher />} />
          <Route path="/TruckAL" element={<TruckAL />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



/* 
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

import MenuBar from './MenuBar';
import Homepage from './Homepage';

import TruckTata from './TruckTata';
import TruckMahindra from './TruckMahindra';
import TruckBharatBenz from './TruckBharatBenz';
import TruckEicher from './TruckEicher';
import TruckAL from './TruckAL';

import Contact from './Contact';
import About from './About';

function App() 
{
  return (

    <div>

      <Router>

      <MenuBar />
        <Routes>

          <Route path='Homepage' exact element={<Homepage />}/>

          <Route path='TruckTata' exact element={<TruckTata />}/>
          <Route path='TruckMahindra' exact element={<TruckMahindra />}/>
          <Route path='TruckBharatBenz' exact element={<TruckBharatBenz />}/>
          <Route path='TruckEicher' exact element={<TruckEicher />}/>
          <Route path='TruckAL' exact element={<TruckAL />}/>

          <Route path='Contact' exact element={<Contact />}/>
          <Route path='About' exact element={<About />}/>

        </Routes>

      </Router>

    </div>

  );

}

export default App; 
*/
