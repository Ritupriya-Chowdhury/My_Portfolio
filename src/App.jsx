import { Outlet } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
