import './App.css';
import Bar from './components/Bar';
import Coffee from './components/Coffee';
import About from './components/About'
import Merch from './components/Merch';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react'
import Homepage from './components/Homepage';
import Reservations from './components/Reservations'
import ComingSoon from './components/ComingSoon';
import ContactPage from './components/ContactPage';
import OnlineOrderConfirm from './components/OnlineOrderConfirm';
import Edit from './components/Edit';

function App() {
  const [form,setForm] =useState([])
//   const [form, setForm] = useState({
//     firstName:'',
//     lastName:'',
//     email:'',
//     number:'',

// })



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage form={form} setForm={setForm}/>} />
          <Route path="/bar" element={<Bar/>} />
          <Route path="/merch" element={<Merch/>} />
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path='/order' element={<Reservations form={form} setForm={setForm}/> } />
          <Route path='/comingsoon' element={<ComingSoon form={form} setForm={setForm}/>}  />
          <Route path='/confirm' element={<OnlineOrderConfirm form={form} setForm={setForm}/>} />
          <Route path='/update/:_id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
