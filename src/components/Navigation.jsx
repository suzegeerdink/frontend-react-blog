import "./Navigation.css"
import logo from '../assets/logo-medium.png';
import { NavLink } from 'react-router-dom';

function Navigation() {

    return (
        <nav>
            <img src={logo} alt="Logo"/>
            <ul className="buttons">
                <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Homepagina</NavLink></li>
                <li><NavLink to="newpost" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuwe Post</NavLink></li>
                <li><NavLink to="allposts" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle Posts</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;