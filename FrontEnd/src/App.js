import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import {  Routes, Route} from 'react-router-dom' ; 
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact' ; 
import Cart from "./components/Cart";  


function App() {
  
  return (

    <>      
        <Routes>
          <Route path='/about' element={<About/>}/>
      <Route path="/home" element={<Home />} />
  <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:param" element={<ProductDetails />} />
<Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>
  );
}


export default App;
