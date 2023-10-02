import { useAppDispatch } from '../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../store/features/login/loginSlice'
import SubmitButton from './SubmitButton'

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const username = (document.getElementById('username') as HTMLInputElement);
        if (username.value.trim() === '') {
            username.placeholder = 'Please insert username!';
            username.classList.remove('login-wrapper__username');
            username.classList.add('login-wrapper__username--error');
        } else {
            dispatch(loginUser(username.value.replace(/\s/g, "")));
            navigate('/');
        }
    }

    return (
        <form className="login-wrapper__form" onSubmit={submit}>
            <label htmlFor="username" className="login-wrapper__label">
                Username:
            </label>
            <input type="text" name="username" id="username" maxLength={25} placeholder='max 25 characters' className="login-wrapper__username" />
            <SubmitButton />
        </form>
    )
}

export default LoginForm