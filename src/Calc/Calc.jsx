import styles from './Calc.module.css'
import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import {Button} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";


class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : 0
        }
    }

    static getDerivedStateFromProps (props, state) {
        return { rate : props.rate.currencyRate}
    }

    calcRate = (e) => {
        e.preventDefault()
        let elements = e.target.elements;
        console.log(elements)
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        this.setState({result : (countCurrency / this.state.rate[typeCurrency])})
    }


    render() {
        return (



            <div className='calc'>
                <h3>Конвертер</h3>
                    <div>Обменять на рубли</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                        <select  className={styles.Select} name='type-currency' id='' >
                            {Object.keys(this.props.rate.currencyRate).map((keyName, i) =>
                                (<option key={keyName} value={keyName}>{keyName}</option>)
                            )}
                        </select>

                           <input className={styles.Input} type='number' defaultValue='100' name='count-currency'></input>
                            <Button className={styles.Button} variant="outlined"  type='submit' defaultValue='calc'>Расчёт</Button>
                        </form>
                    </div>
                <h4>Result</h4>
                <ul className='calc-res'>
                    <li>RUB {this.state.result.toFixed(2)}</li>

                </ul>
            </div>
        );
    }
}

export default Calc;
