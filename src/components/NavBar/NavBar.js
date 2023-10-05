import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () =>{
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3>Ecommerce</h3>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column boton">
                        <NavLink to={`/category/Cdjs`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cdjs</NavLink>
                    </div>
                    <div className="column boton">
                        <NavLink to={`/category/Auriculares`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Auriculares</NavLink>
                    </div>
                    <div className="column boton">
                        <NavLink to={`/category/Bandejas Vinilos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bandejas Vinilos</NavLink>
                    </div>
                </div>
                
            </div>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;