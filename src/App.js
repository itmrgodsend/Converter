import React, {Component} from 'react';
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import Calc from "./Calc/Calc";
import {Route, Switch} from "react-router";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {}
        }
        this.currency = ['USD', 'EUR', 'CAD']
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
            .then(data => {
                return data.json()
            })
            .then(data => {

                this.setState({date: data.date})
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }

                this.setState({currencyRate: result})

            })
    }

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <div className='main'>
                    <main>
                        <Route exact path='/' render={() => <Rate rate={this.state}/>}/>
                        <Route path='/calc' render={() => <Calc rate={this.state}/>}/>
                    </main>

                </div>
                <div className='footer'>Footer</div>
            </div>
        );
    }
}
export default App;
