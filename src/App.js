import './App.css';
// Components
import Footer from './components/Footer/Footer';
import Frontpage from './components/Frontpage/Frontpage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import CarDetails from './components/CarDetails/CarDetails';

// Router
import {
  BrowserRouter,
  Routes,
  /*Switch,*/
  Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Frontpage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/cars' element={<CarDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
