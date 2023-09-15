import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='navigation-wrapper'>
        <Link to='/' className='navigation-wrapper__link navigation-wrapper__link--hover'>
            <img src='/logo.png' alt='logo' className='navigation-wrapper__logo' />
        </Link>
        <div className='navigation-wrapper__links'>
            <Link to='/allproducts' className='navigation-wrapper__link'>
                All Products
            </Link>
            <Link to='/womens' className='navigation-wrapper__link'>
                Women's Clothing
            </Link>
            <Link to='/mens' className='navigation-wrapper__link'>
                Men's Clothing
            </Link>
            <Link to='/jewelery' className='navigation-wrapper__link'>
                Jewelery
            </Link>
            <Link to='/electronics' className='navigation-wrapper__link'>
                Electronics
            </Link>
        </div>
        <div className="navigation-wrapper__links">
            <Link to='/login' className='navigation-wrapper__link'>
                Login
            </Link>
            <Link to='/cart' className='navigation-wrapper__link navigation-wrapper__link--align'>
                <img src="/cart.png" alt="cart" className="navigation-wrapper__cart-logo" />
                <p className="navigation-wrapper__cart-count">1</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navigation