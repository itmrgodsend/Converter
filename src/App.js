import React from 'react';
import Header from "./Header/Header";
import Rate from "./Rate/Rate";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className='wrapper'>
                <Header/>
                <Rate/>
                <div className='footer'>Footer</div>
            </div>
        );
    }
}

export default App;
