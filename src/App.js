import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
// KOMPONENTLER
import Navbar from './components/Navbar'
import Introsection from './components/Introsection';
import CardsSection from './components/CardsSection';

import Reservations from './components/Reservations';

import Count from './components/Count';

function App() {
  return (
    <>
       <Navbar />
       <Introsection />
       <CardsSection />
       <Reservations />
       <Count />
    </>

  );
}


export default App;
