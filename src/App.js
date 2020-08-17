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
                <div className='main'>
                    <h1>Курс</h1>
                </div>
                <div className='footer'>Footer</div>
            </div>
        );
    }
}

export default App;
