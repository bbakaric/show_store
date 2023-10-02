import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'
import LogoutButton from './LogoutButton'

const NavigationDesktop = () => {
    const quantityIndicator = useAppSelector(state => state.addToCart.quantityIndicator);
    const user = useAppSelector(state => state.loginReducer);

    return (
        <nav className='navigation-wrapper-desktop navigation-wrapper--desktop' id="nav">
            <Link to='/' className='navigation-wrapper-desktop__link navigation-wrapper-desktop__link--hover'>
                <img src='/logo.png' alt='logo' className='navigation-wrapper-desktop__logo' />
            </Link>
            <div className='navigation-wrapper-desktop__links'>
                <Link to='/allproducts' className='navigation-wrapper-desktop__link'>
                    All Products
                </Link>
                <Link to='/womens' className='navigation-wrapper-desktop__link'>
                    Women's Clothing
                </Link>
                <Link to='/mens' className='navigation-wrapper-desktop__link'>
                    Men's Clothing
                </Link>
                <Link to='/jewelery' className='navigation-wrapper-desktop__link'>
                    Jewelery
                </Link>
                <Link to='/electronics' className='navigation-wrapper-desktop__link'>
                    Electronics
                </Link>
            </div>
            <div className="navigation-wrapper-desktop__links">
                {user.user.trim() == '' &&
                    <Link to='/login' className='navigation-wrapper-desktop__link'>
                        Login
                    </Link>
                }
                {user.user.trim() != '' && 
                    <>
                        <LogoutButton />
                    </>
                }
                <Link to='/cart' className='navigation-wrapper-desktop__link navigation-wrapper-desktop__link--align'>
                    <img src="/cart.png" alt="cart" className="navigation-wrapper-desktop__cart-logo" />
                    <p className="navigation-wrapper-desktop__cart-count">
                        {quantityIndicator}
                    </p>
                </Link>
            </div>
        </nav>
    )
}

export default NavigationDesktop