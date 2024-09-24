import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
// import Header from './components/Header.jsx';
import About from './pages/about/About.jsx';
import Slider from './pages/slider/Slider.jsx';
import Tour from './pages/tour/Tour.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import TourDetails from './pages/tour/TourDetails.jsx';
import PassengerDetails from './pages/tour/PassengerDetails.jsx'; 
import Layout from './layouts/Layout.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<> <Slider />  </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/tour' element={<><Tour /></>} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          
          <Route path="/passenger-details" element={<PassengerDetails />} /> 
        </Route>
      </Routes>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;