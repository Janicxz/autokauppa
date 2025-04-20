import './App.css';
// Components
import Footer from './components/Footer/Footer';
import Frontpage from './components/Frontpage/Frontpage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import CarDetails from './components/CarDetails/CarDetails';
import OnSalePage from './components/OnSalePage/OnSalePage';

// Router
import {
  BrowserRouter,
  Routes,
  /*Switch,*/
  Route, } from 'react-router-dom';
//import PageNavigation from './components/PageNavigation/PageNavigation';
import SalesManagement from './components/Admin/SalesManagement/SalesManagement';
import { UserContextProvider } from './hooks/UserContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
          <Header />
          <Routes>
              <Route path='/' element={<Frontpage />}></Route>
              <Route path='*' element={<NotFound />}></Route>
              <Route path='/cars' element={<CarDetails />}></Route>
              <Route path='/onsale' element={<OnSalePage />}></Route>
              <Route path='/admin/salesmanagement' element={<SalesManagement />}></Route>
          </Routes>
          {/*<PageNavigation />*/}
          <Footer />
        </UserContextProvider >
      </BrowserRouter>
    </div>
  );
}

export default App;
