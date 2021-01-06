import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/param/1">Comp. C/ Param01</Link></li>
                    <li><Link to="/param/2">Comp. C/ Param02</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;