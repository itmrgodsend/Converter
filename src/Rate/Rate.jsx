import classes from './Rate.module.css'
import React, {Component, useEffect, useState} from 'react';
import Calc from "../Calc/Calc";
import {Line} from "react-chartjs-2";
import ChartUSD from "./ChartUSD";


const Rate = (props) => {
    let ArrayData = [];
    for (let key in props.rate.data) {
        ArrayData.push(key)
    }
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let Arr = Object.entries(props.rate.data);
        let ArrayRate = [];
        for (let i = 0; i < Arr.length; i++) {
            ArrayRate.push((1 / Arr[i][1].USD).toFixed(3))
        }

        setChartData({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Rate",
                data: ArrayRate.sort(),
                backgroundColor: [
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth: 4
            }]
        })
    }

    useEffect(() => {
        chart()
    }, [props])


    return (


        <div>

            <h3 className='date'>Курс на {props.rate.date}</h3>
            <div className='rate'>


                <ChartUSD Chart={props.rate}/>
                <div key={props.rate.currencyRate} className='blocks'>
                    <div>EUR</div>
                    <div>{(1 / props.rate.currencyRate.EUR).toFixed(3)}</div>
                    <div><Line data={chartData}/></div>
                </div>
                <div key={props.rate.currencyRate} className='blocks'>
                    <div>CAD</div>
                    <div>{(1 / props.rate.currencyRate.CAD).toFixed(3)}</div>
                    <div><Line data={chartData}/></div>
                </div>


                <Line data={chartData}/>
            </div>
        </div>
    );
}

export default Rate;
