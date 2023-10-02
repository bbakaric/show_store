import { useAppDispatch } from '../hooks/hooks'
import { clearCartLogout } from '../store/features/cartLogic/cartSlice'
import { logoutUser } from '../store/features/login/loginSlice'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const toggleMenuLink = () => {
      const hamburger = document.querySelector('.navigation-wrapper-mobile__hamburger');
      const close = document.querySelector('.navigation-wrapper-mobile__close');
      const menu = document.querySelector('.navigation-wrapper-mobile__bottom');

      if (menu?.classList.contains('navigation-wrapper-mobile__bottom--display')) {
          hamburger?.classList.remove('navigation-wrapper-mobile__hamburger--opacity')
          close?.classList.remove('navigation-wrapper-mobile__close--opacity')
          menu.classList.remove('navigation-wrapper-mobile__bottom--display')
      } else {
          return
      }
  }

  return (
    <button className="logout-btn" onClick={() => {
        dispatch(clearCartLogout());
        dispatch(logoutUser());
        navigate('/');
        toggleMenuLink();
    }}>
        Logout
    </button>
  )
}

export default LogoutButton