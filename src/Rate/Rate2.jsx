import classes from './Rate.module.css'
import React, {Component} from 'react';
import Calc from "../Calc/Calc";


class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {}
        }
        this.currency = ['USD', 'RUB', 'CAD']
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
                console.log(result);
                this.setState({currencyRate: result})
            })
    }

    render() {
        return (


            <div >
                <h3 className='date'>Курс на {this.state.date}</h3>
                <div className='rate'>

                        {Object.keys(this.state.currencyRate).map((keyName, i) =>
                            (
                                <div key={keyName} className='blocks'>
                                    <div>{keyName}</div>
                                    <div>{this.state.currencyRate[keyName]}</div>
                                </div>
                            )
                        )}

                </div>
                <Calc rate={this.state.currencyRate}/>
            </div>
        );
    }
}

export default Rate;