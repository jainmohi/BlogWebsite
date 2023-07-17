import { Link } from "react-router-dom/dist"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter Email..."></input>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Password..."></input>
            <button className="loginButton">Login</button>
        </form>
            <button className="loginRegisterButton">
              <Link className="link" to="/register">Register</Link>
            </button>
       
    </div>
  )
}
