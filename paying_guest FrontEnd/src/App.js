import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import PageNotFound from './common/error_pages/PageNotFound.js';
import Footer from './Layout/Footer.js';

import AddressRegPage from './pages/AddressRegPage.js';
import BuildingRegPage from './pages/BuildingRegPage.js';
import CustomerRegPage from './pages/CustomerRegPage.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import ManagerRegPage from './pages/ManagerRegPage.js';
import RoomRegPage from './pages/RoomRegPage.js';
import ServicesRegPage from './pages/ServicesRegPage.js';
import SignUpPage from './pages/SignUpPage.js';
import Navbar from './Layout/Navbar.js';
import OwnerInfo from './pages/OwnerInfo';
import BuildingCard from './pages/BuildingCard';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Practice from './pages/Practice';
import BuildingDetails from './pages/BuildingDetails';
import RoomDetails from './pages/BuildingDetail';
import BuildingDetail from './pages/BuildingDetail';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <div className="container" style={{ minHeight: '60vh', marginTop: '20vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/owner/signup" element={<SignUpPage />} />
            <Route path="/owner/login" element={<LoginPage />} />
            <Route path="/owner/info" element={<OwnerInfo />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/buildingcards" element={<BuildingCard />} />
            <Route path="/building/register" element={<BuildingRegPage />} />
            <Route path="/building/address" element={<AddressRegPage />} />
            <Route path="/service" element={<Services />} />
            <Route path="/bd" element={<BuildingDetails />} />
            <Route path="/building/manager/info" element={<ManagerRegPage />} />
            <Route path="/building/room/register" element={<RoomRegPage />} />
            <Route path="/building/services/register" element={<ServicesRegPage />} />
            <Route path="/building/:id" element={<BuildingDetail />} />
            <Route path="/customer/signup" element={<CustomerRegPage />} />

            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>



      </BrowserRouter>



    </div>

  );
}

export default App;
