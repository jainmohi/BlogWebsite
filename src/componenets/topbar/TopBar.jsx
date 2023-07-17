import { Link } from "react-router-dom/dist";
import "./TopBar.css";
export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/Write">WRITE</Link>
                </li>
                <li className="topListItem">
                  {user && <li className="topListItem">LOGOUT</li>}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? ( <img className="topImage" src="images/top.jpg" alt="">
            </img>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">REGISTER</Link>
                </li>
              </ul>
            )
          }
            <i className=" topSearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
