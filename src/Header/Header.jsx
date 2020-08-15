import React from 'react';
import classes from './Header.module.css'


const Header = () => {
    return (
        <header>
            <h2 className={classes.logo}>Converter</h2>
            <div className={classes.nav}>
            <nav>
                <ul>
                    <li><a href="#">Курс</a></li>
                    <li><a href="#">Конвертер</a></li>
                </ul>
            </nav>
            </div>

        </header>


    );
};

export default Header;