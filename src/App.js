import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Support from './screens/Support';
import Employee from './screens/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './screens/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='support' element={<Support/>}/>
        <Route path='employee' element={<Employee/>}/>
      </Routes>
      </BrowserRouter>
     {/* <Home/>
     <About/>
     <Contact/>
     <Support/>
     <Employee/> */}
    </div>);
}

export default App;
