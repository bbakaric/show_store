import { Route, Routes } from 'react-router-dom'
import './styles/style.scss'
import HomePage from "./views/HomePage"
import Navigation from './components/Navigation'
import AllProducts from './views/AllProducts'
import Womens from './views/Womens'
import Mens from './views/Mens'
import Jewelery from './views/Jewelery'
import Electronics from './views/Electronics'
import Cart from './views/Cart'
import Login from './views/Login'
import ProductPage from './views/ProductPage'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
