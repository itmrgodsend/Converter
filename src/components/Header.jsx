import React from 'react';



const Header = () => {
    return (
        <header>
            <h2 className='logo'>Converter</h2>
            <div className='div-nav'>
            <nav>
                <ul className='navigation'>
                    <li><a href="#">Курс</a></li>
                    <li><a href="#">Конвертер</a></li>
                </ul>
            </nav>
            </div>

        </header>


    );
};

export default Header;