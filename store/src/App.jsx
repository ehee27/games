import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { CartProvider } from './context/CartContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
