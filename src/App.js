import React from 'react';
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import Calc from "./Calc/Calc";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className='wrapper'>
                <Header/>
                <div className='main'>
                <Rate/>
                </div>
                <div className='footer'>Footer</div>
            </div>
        );
    }
}

export default App;
