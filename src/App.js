import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
// KOMPONENTLER
import Navbar from './components/Navbar'
import Introsection from './components/Introsection';
import CardsSection from './components/CardsSection';

function App() {
  return (
    <>
       <Navbar />
       <Introsection />
       <CardsSection />
    </>

  );
}


export default App;
