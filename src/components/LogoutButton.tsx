import { useAppDispatch } from '../hooks/hooks'
import { clearCartLogout } from '../store/features/cartLogic/cartSlice';
import { logoutUser } from '../store/features/login/loginSlice';

const LogoutButton = () => {
    const dispatch = useAppDispatch();
  return (
    <button className="logout-btn" onClick={() => {
        dispatch(clearCartLogout())
        dispatch(logoutUser())
    }}>
        Logout
    </button>
  )
}

export default LogoutButton