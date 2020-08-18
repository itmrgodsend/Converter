import classes from './Calc.module.css'
import React, {Component} from 'react';


class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : 0
        }
    }

    static getDerivedStateFromProps (props, state) {
        return { rate : props.rate}
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
                <h3>Calculator</h3>

                    <div>I want</div>

                    <div>
                        <form onSubmit={this.calcRate}>
                        <input type='number' defaultValue='150' name='count-currency'/>
                        <select name='type-currency' id=''>
                            {Object.keys(this.props.rate).map((keyName, i) =>
                                (


                                        <option key={keyName} value={keyName}>{keyName}</option>

                                )
                            )}
                        </select>
                            <input type='submit' defaultValue='calc'/>
                        </form>
                    </div>
                <h4>Result</h4>
                <ul className='calc-res'>
                    <li>EUR {this.state.result}</li>

                </ul>
            </div>
        );
    }
}

export default Calc;
