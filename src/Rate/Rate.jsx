import classes from './Rate.module.css'
import React, {Component} from 'react';
import Calc from "../Calc/Calc";
const request = require('request');


const Rate = (props) => {
        return (


            <div >
                <h3 className='date'>Курс на {props.rate.date}</h3>
                <div className='rate'>

                        {Object.keys(props.rate.currencyRate).map((keyName, i) =>
                            (
                                <div key={keyName} className='blocks'>
                                    <div>{keyName}</div>
                                    <div>{( 1 / props.rate.currencyRate[keyName]).toFixed(3)}</div>
                                </div>
                            )
                        )}

                </div>
            </div>
        );
}

export default Rate;
