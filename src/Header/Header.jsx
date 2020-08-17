import React from 'react';
import classes from './Header.module.css'
import '../App.css'
import '../index.css'



const Header = () => {
    return (
        <div className='header'>
            <h2 className={classes.logo}>Converter</h2>
            <div className={classes.nav}>
            {/*<nav>
                <ul>
                    <li><a href="#">Курс</a></li>
                    <li><a href="#">Конвертер</a></li>
                </ul>
            </nav>*/}
            </div>

        </div>


    );
};

export default Header;