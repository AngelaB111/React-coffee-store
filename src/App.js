
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import {  Routes, Route} from 'react-router-dom' ; 
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact' ; 

function App() {
  
//   const [isLoggedin, setisLoggedIn] = useState(true);
  
//   useEffect ( () => 
//     { alert("isLoggedin state changed")}, [isLoggedin]) ; 
// if(isLoggedin) { 
//     return ( 
//       <> 

  return (
    <>
      
        <Routes>
          <Route path='/about' element={<About/>}/>
      <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />
        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:param" element={<ProductDetails />} />

        </Routes>
        
    </>
  );
}

/*<button onClick={() => setisLoggedIn(false)}> Log out </button>
</>
);} 
  else 
   {
     return( 
      <> 
    <Login/> 
    
<button onClick={() => setisLoggedIn(true)}> Log in </button>
    </>
   );} */

export default App;
