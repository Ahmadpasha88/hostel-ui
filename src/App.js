import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AOS from "aos";
import { createContext, useEffect } from 'react';
import JoiningForm from './Components/UserJoiningForm';
import HostelRegister from './Components/HostelRegister';
import HostelDetailedView from './Components/HostelDetailedView';
import AvailableBeds from './Components/AvailableBeds';
import HostelRoom from './Components/HostelRoom';
import Dashboard from './Components/HostelOwnerDashBoard';
import Login from './Components/Login';
import Register from './Components/Register';
import AssociationRegister from './Components/AssociationRegister';
import PaymentInfo from './Components/PaymentInfo';
import Remark from './Components/Remark';
import ComplaintList from './Components/ComplaintList';
import PendingUser from './Components/PendingUser';
import PendingHostel from './Components/PendingHostel';
import PendingAssociation from './Components/PendingAssociation';
import UserProfile from './Components/UserProfile';
import Rooms from './Components/Rooms';
import UserDashboard from './Components/UserDashboard';
import Footer from './Components/Footer';
import AboutPage from './Components/About';
import ListOfHostels from './Components/ListOfHostels';



export const SampleContext = createContext();



const App = () => {

  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);

  return (
    <div className='m-0 p-0'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/user' element={<UserDashboard/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/contact' element={<ContactUs/>}/>
          <Route exact path='/beds' element={<AvailableBeds />} />
          <Route exact path='/joining' element={<JoiningForm/>} />
          <Route exact path='/details' element={<HostelDetailedView/>} />
          <Route exact path='/hostelRegister' element={<HostelRegister/>} />
          <Route exact path='/rooms' element={<Rooms/>} />
          <Route exact path='/hostelDashboard' element={<Dashboard/>} />
          <Route exact path='/association' element={<AssociationRegister/>} />
          <Route exact path='/paymentInfo' element={<PaymentInfo/>} />
          <Route exact path='/remark' element={<Remark/>} />
          <Route exact path='/complaints' element={<ComplaintList/>} />
          <Route exact path='/pendingUser' element={<PendingUser/>} />
          <Route exact path='/pendingHostel' element={<PendingHostel/>} />
          <Route exact path='/pendingAssociation' element={<PendingAssociation/>} />
          <Route exact path='/profile' element={<UserProfile/>} />  
          <Route exact path='/about' element={<AboutPage/>} />
          <Route exact path='/hostelList' element={<ListOfHostels/>} />


        </Routes>
        
      </BrowserRouter>
    
    </div>
  );
}

export default App;
