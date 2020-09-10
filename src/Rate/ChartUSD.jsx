import classes from './Rate.module.css'
import React, {Component, useEffect, useState} from 'react';
import Calc from "../Calc/Calc";
import {Line} from "react-chartjs-2";


const ChartUSD = (props) => {
    const [chartDataUSD, setChartDataUSD] = useState({});

    let ArrayData = [];
    for (let key in props.Chart.data) {
        ArrayData.push(key)
    }
    console.log()


        let Arr = Object.entries(props.Chart.data);
        let ArrayRate = [];
        for (let i = 0; i < Arr.length; i++) {
            ArrayRate.push((1 / Arr[i][1].USD).toFixed(3))
        }

        setChartDataUSD({
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


    useEffect(() => {
        ChartUSD()
    }, [props])


    return (


        <div>




                <div key={props.Chart.currencyRate} className='blocks'>
                    <div>USD</div>
                    <div>{(1 / props.Chart.currencyRate.USD).toFixed(3)}</div>
                    <div><Line data={chartDataUSD}/></div>
                </div>


        </div>
    );
}

export default ChartUSD;
