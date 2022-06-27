import { Link } from 'react-router-dom';
import Home from '../../pages/Home';


import Logo from '../../assets/images/logo.png'
import './style.scss'


export default function Header() {
    return (
            <header>
                <h3 className="screen-reader-only">Omma - index</h3>
                <img src={Logo} alt="Logo" />
            </header>
            
    );
}