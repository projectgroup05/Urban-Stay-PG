import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from './Layout/Navbars';

import PageNotFound from './error_pages/PageNotFound';

import AddressRegPage from './pages/AddressRegPage.js';
import BuildingRegPage from './pages/BuildingRegPage.js';
import CustomerRegPage from './pages/CustomerRegPage.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import ManagerRegPage from './pages/ManagerRegPage.js';
import RoomRegPage from './pages/RoomRegPage.js';
import ServicesRegPage from './pages/ServicesRegPage.js';
import SignUpPage from './pages/SignUpPage.js';

import OwnerInfo from './pages/OwnerInfo';
import Footer from './Layout/Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbars />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/owner/signup" element={<SignUpPage />} />
            <Route path="/owner/login" element={<LoginPage />} />
            <Route path="/owner/info" element={<OwnerInfo />} />

            <Route path="/building/register" element={<BuildingRegPage />} />
            <Route path="/building/address" element={<AddressRegPage />} />


            <Route path="/building/manager/info" element={<ManagerRegPage />} />
            <Route path="/building/room/register" element={<RoomRegPage />} />
            <Route path="/building/services/register" element={<ServicesRegPage />} />

            <Route path="/customer/signup" element={<CustomerRegPage />} />

            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
