import './App.css'
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//componentes
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

//Pagínas
const Home = React.lazy( () => import('./Pages/Home'));
const Contato = React.lazy(() => import('./Pages/Contato'));

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contato' elemento={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
