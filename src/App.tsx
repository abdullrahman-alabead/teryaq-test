// Dependencies Import
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


// Components imports
import Header from './Component/Header/Header';
import Landing from './Component/Landing/Landing';
import About from './Component/About/About';
import Services from './Component/Servieces/Services';
import Contact from './Component/Contact/Contact';
import Clients from './Component/Clients/Clients';
import './App.scss';

function App() {

  // Remove loader when page fully load
  window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");
    if(loader instanceof HTMLElement){
      loader.style.animation = "fadeOut 1s ease-out forwards"
    }
  })
  return (
    <div className="App">
      <button className='scrollTop' onClick={() => window.scrollTo(0,0)}><FontAwesomeIcon icon={faArrowUp} /></button>
      <div className="loader">
      </div>
      <Header /> 
      <Landing />
      <About />
      <Services />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
