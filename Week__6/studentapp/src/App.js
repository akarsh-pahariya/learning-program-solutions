import logo from './logo.svg';  
import './App.css';
import Home from './Components/Home.js';
import AboutUs from './Components/AboutUs.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="container">
      <Home/>
      <AboutUs/>
      <Contact/>
    </div>
  );
}

export default App;
