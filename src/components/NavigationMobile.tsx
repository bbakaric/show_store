import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'
import LogoutButton from './LogoutButton'

const NavigationMobile = () => {
    const quantityIndicator = useAppSelector(state => state.addToCart.quantityIndicator);
    const user = useAppSelector(state => state.loginReducer);

    const menu: HTMLElement = document.querySelector('.navigation-wrapper-mobile__bottom')!;
    const hamburger: HTMLElement = document.querySelector('.navigation-wrapper-mobile__hamburger')!;
    const close: HTMLElement = document.querySelector('.navigation-wrapper-mobile__close')!;

    const toggleMenu = () => {
        const menu: HTMLElement = document.querySelector('.navigation-wrapper-mobile__bottom')!;
        const hamburger: HTMLElement = document.querySelector('.navigation-wrapper-mobile__hamburger')!;
        const close: HTMLElement = document.querySelector('.navigation-wrapper-mobile__close')!;
        hamburger.classList.toggle('navigation-wrapper-mobile__hamburger--opacity');
        close.classList.toggle('navigation-wrapper-mobile__close--opacity');
        menu.classList.toggle('navigation-wrapper-mobile__bottom--display');
    }

    const toggleMenuLink = () => {
        if (menu.classList.contains('navigation-wrapper-mobile__bottom--display')) {
            hamburger.classList.remove('navigation-wrapper-mobile__hamburger--opacity')
            close.classList.remove('navigation-wrapper-mobile__close--opacity')
            menu.classList.remove('navigation-wrapper-mobile__bottom--display')
        } else {
            return
        }
    }

    return (
        <nav className='navigation-wrapper-mobile' id="nav">
            <div className="navigation-wrapper-mobile__top">
                <Link to='/' className='navigation-wrapper-mobile__link' onClick={toggleMenuLink}>
                    <img src='/logo.png' alt='logo' className='navigation-wrapper-mobile__logo' />
                </Link>
                <div className="navigation-wrapper-mobile__right">
                    <Link to='/cart' className='navigation-wrapper-mobile__link navigation-wrapper-mobile__link--align' onClick={toggleMenuLink}>
                        <img src="/cart.png" alt="cart" className="navigation-wrapper-mobile__cart-logo" />
                        <p className="navigation-wrapper-mobile__cart-count">
                            {quantityIndicator}
                        </p>
                    </Link>
                    <div className="navigation-wrapper-mobile__img-wrapper" onClick={toggleMenu}>
                        <img src="/hamburger.png" alt="menu" className="navigation-wrapper-mobile__hamburger" />
                        <img src="/close.png" alt="close" className="navigation-wrapper-mobile__close" />
                    </div>
                </div>
            </div>
            <div className="navigation-wrapper-mobile__bottom">
                <div className='navigation-wrapper-mobile__links'>
                    <Link to='/allproducts' className='navigation-wrapper-mobile__link' onClick={toggleMenu}>
                        All Products
                    </Link>
                    <Link to='/womens' className='navigation-wrapper-mobile__link' onClick={toggleMenu}>
                        Women's Clothing
                    </Link>
                    <Link to='/mens' className='navigation-wrapper-mobile__link' onClick={toggleMenu}>
                        Men's Clothing
                    </Link>
                    <Link to='/jewelery' className='navigation-wrapper-mobile__link' onClick={toggleMenu}>
                        Jewelery
                    </Link>
                    <Link to='/electronics' className='navigation-wrapper-mobile__link' onClick={toggleMenu}>
                        Electronics
                    </Link>
                </div>
                <div className="navigation-wrapper__links">
                    {user.user.trim() == '' &&
                        <Link to='/login' className='navigation-wrapper-mobile__link' onClick={toggleMenu}>
                            Login
                        </Link>
                    }
                    {user.user.trim() != '' && 
                        <>
                            <LogoutButton />
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavigationMobile