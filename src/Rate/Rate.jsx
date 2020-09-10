import classes from './Rate.module.css'
import React, {Component, useEffect, useState} from 'react';
import Calc from "../Calc/Calc";
import {Line} from "react-chartjs-2";



const Rate = (props) => {
    let ArrayData = [];
    for (let key in props.rate.data) {
        ArrayData.push(key)
    }
    const [chartDataUSD, setChartDataUSD] = useState({});
    const [chartDataEUR, setChartDataEUR] = useState({});
    const [chartDataCAD, setChartDataCAD] = useState({});

    const chart = () => {
        let ArrUSD = Object.entries(props.rate.data);
        let ArrayRateUSD = [];
        for (let i = 0; i < ArrUSD.length; i++) {
            ArrayRateUSD.push((1 / ArrUSD[i][1].USD).toFixed(3))
        }
        let ArrEUR = Object.entries(props.rate.data);
        let ArrayRateEUR = [];
        for (let i = 0; i < ArrEUR.length; i++) {
            ArrayRateEUR.push((1 / ArrEUR[i][1].EUR).toFixed(3))
        }
        let ArrCAD = Object.entries(props.rate.data);
        let ArrayRateCAD = [];
        for (let i = 0; i < ArrCAD.length; i++) {
            ArrayRateCAD.push((1 / ArrCAD[i][1].CAD).toFixed(3))
        }

        setChartDataUSD({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Rate",
                data: ArrayRateUSD.sort(),
                backgroundColor: [
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth: 4
            }]
        })
        setChartDataEUR({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Rate",
                data: ArrayRateEUR.sort(),
                backgroundColor: [
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth: 4
            }]
        })
        setChartDataCAD({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Rate",
                data: ArrayRateCAD.sort(),
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


                <div key={props.rate.currencyRate} className='blocks'>
                    <div>USD</div>
                    <div>{(1 / props.rate.currencyRate.USD).toFixed(3)}</div>
                    <div><Line data={chartDataUSD}/></div>
                </div>
                <div key={props.rate.currencyRate} className='blocks'>
                    <div>EUR</div>
                    <div>{(1 / props.rate.currencyRate.EUR).toFixed(3)}</div>
                    <div><Line data={chartDataEUR}/></div>
                </div>
                <div key={props.rate.currencyRate} className='blocks'>
                    <div>CAD</div>
                    <div>{(1 / props.rate.currencyRate.CAD).toFixed(3)}</div>
                    <div><Line data={chartDataCAD}/></div>
                </div>



            </div>
        </div>
    );
}

export default Rate;
