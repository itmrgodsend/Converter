import React from 'react';
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import Calc from "./Calc/Calc";
import {Route, Switch} from "react-router";
import currencyRate from './Rate/Rate'


class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div className='wrapper'>
                <Header/>
                <div className='main'>
                    <main>
                        <Switch>
                            <Route exact path='/' component={Rate}/>
                            <Route path='/calc' component={Calc}/>
                        </Switch>
                    </main>

                </div>
                <div className='footer'>Footer</div>
            </div>
        );
    }
}

export default App;
