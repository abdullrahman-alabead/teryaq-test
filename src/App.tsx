// Dependencies Import
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
// Components imports
import Header from './Component/Header/Header';
import Landing from './Component/Landing/Landing';
import About from './Component/About/About';
import Services from './Component/Servieces/Services';
import Contact from './Component/Contact/Contact';
import './App.scss';
import './assets/images/landing.png'

function App() {

  return (
    <div className="App">
      <Header /> 
      <Landing />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
