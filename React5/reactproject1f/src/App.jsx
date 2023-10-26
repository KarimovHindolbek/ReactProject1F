
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './companents/Header/Header';
import Huren from './pages/Huren/Huren';
import Kopen from './pages/Kopen/Kopen';
import Modellen from './pages/Modellen/Modellen';
import Nieuws from './pages/Nieuws/Nieuws';
import Contact from './pages/Contact/Contact';
import Hero from './companents/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Routes>
        <Route path='/huren' element={<Huren/>}/>
        <Route path='/kopen' element={<Kopen/>}/>
        <Route path='/modellen' element={<Modellen/>}/>
        <Route path='/nieuws' element={<Nieuws/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
