import { useAppSelector } from "../hooks/hooks"
import LoginForm from "../components/LoginForm"

const Login = () => {
  const user = useAppSelector(state => state.loginReducer);
  
  return (
    <div className="login-wrapper">
      <h1 className="login-wrapper__heading">
        Login
      </h1>
      {user.user.length <= 0 && 
        <LoginForm />
      }
      {user.user.length > 0 && 
        <h4 className="login-wrapper__message">
          Already logged in
        </h4>
      }
    </div>
  )
}

export default Login