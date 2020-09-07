import React from 'react';
import classes from './Header.module.css'

import '../index.css'
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div className='header'>
            <h2 className='logo'>Converter</h2>

            <nav className='nav'>
                <ul>
                    <li><Link to="/">Курс</Link></li>
                    <li><Link to="/calc">Конвертер</Link></li>
                </ul>
            </nav>


        </div>


    );
};

export default Header;