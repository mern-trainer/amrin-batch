import "./Header.css"
import { FiUser } from "react-icons/fi";

const Header = () => {
    return <div className="container">
        <div className="header-logo">
            <img width={120} src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" alt="logo" />
        </div>
        <ul className="nav">
            <li>Our Cars</li>
            <li>Shop</li>
            <li>Owners</li>
            <li>About us</li>
        </ul>
        <div className="icons">
            <FiUser />
            <button className="btn">Sign In</button>
        </div>
    </div>
}

export default Header