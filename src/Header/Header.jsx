import React from 'react';
import classes from './Header.module.css'

import '../index.css'



const Header = () => {
    return (
        <div className='header'>
            <h2 className='logo'>Converter</h2>

            <nav className='nav'>
                <ul>
                    <li><a href="#">Курс</a></li>
                    <li><a href="#">Конвертер</a></li>
                </ul>
            </nav>


        </div>


    );
};

export default Header;