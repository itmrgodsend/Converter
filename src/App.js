import React from 'react';
import Header from "./Header/Header";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className='wrapper'>
                <Header/>
                {/*<h1>Курсfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</h1>*/}
                <div className='main'>

                    <ul>
                        <li><a href="#">Курс</a></li>
                        <li><a href="#">Конвертер</a></li>
                    </ul>
                </div>
                <div className='footer'>Footer</div>
            </div>
        );
    }
}

export default App;
