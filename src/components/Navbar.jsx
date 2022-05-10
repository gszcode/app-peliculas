import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <img src={logo} alt={logo} />  
            </div>  
            <Link to="/">
                <h1>Mis Películas 🍿</h1>
            </Link>
        </nav>
    )
}

export default Navbar;