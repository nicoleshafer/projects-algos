import './App.css';
import Bar from './components/Bar';
import Coffee from './components/Coffee';
import About from './components/About'
import Merch from './components/Merch';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './components/Homepage';
import Reservations from './components/Reservations'
import ComingSoon from './components/ComingSoon';
import ContactPage from './components/ContactPage';


function App() {






  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/bar" element={<Bar/>} />
          <Route path="/merch" element={<Merch/>} />
          <Route path="/information" element={<About/>} />
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path='/order' element={<Reservations/> }/>
          <Route path='/comingsoon' element={<ComingSoon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
