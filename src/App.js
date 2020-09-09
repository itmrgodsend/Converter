import React, {Component} from 'react';
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import Calc from "./Calc/Calc";
import {Route, Switch} from "react-router";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'data': {},
            'date': '',
            'currencyRate': {}
        }
        this.currency = ['USD', 'EUR', 'CAD']
        this.getRate();
        this.getResData();
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

    getResData = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        let start = yyyy + '-' + (mm - 1) + '-' + dd;
        console.log(start, today);

        fetch(`https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${today}`)
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({data: data.rates})

                /* for (let lol in this.state.data) {
                     console.log(lol)
                 }*/
            })

        /*let resData = Object.entries(data.rates);
                  setLol(data.rates);*/
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
