import classes from './Rate.module.css'
import React, {Component, useEffect, useState} from 'react';
import Calc from "../Calc/Calc";
import {Line} from "react-chartjs-2";



const Rate = (props) => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thusday', 'friday'],
            datasets: [{
                label: "Rate",
                data: [32, 45, 12, 76, 69],
                backgroundColor: [
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth: 4
            }]
        })
    }

    useEffect(() => {
        chart()
    }, [])


    return (


        <div>
            <h3 className='date'>Курс на {props.rate.date}</h3>
            <div className='rate'>

                {Object.keys(props.rate.currencyRate).map((keyName, i) =>
                    (
                        <div key={keyName} className='blocks'>
                            <div>{keyName}</div>
                            <div>{(1 / props.rate.currencyRate[keyName]).toFixed(3)}</div>
                                <div><Line data={chartData}/></div>
                        </div>
                    )
                )}

            </div>
        </div>
    );
}

export default Rate;
