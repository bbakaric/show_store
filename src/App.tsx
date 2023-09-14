import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from "./views/Home"
import Navigation from './components/Navigation'
import AllProducts from './views/AllProducts'
import Womens from './views/Womens'
import Mens from './views/Mens'
import Jewelery from './views/Jewelery'
import Electronics from './views/Electronics'
import Cart from './views/Cart'
import Login from './views/Login'

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
