import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import classes from "./Rate.module.css";


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
        console.log(ArrayRateUSD.reverse())

        setChartDataUSD({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Курс",
                data: ArrayRateUSD.sort().reverse(),
                backgroundColor: [
                    '#6a9b5c'
                ],
                borderWidth: 4
            }]
        })
        setChartDataEUR({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Курс",
                data: ArrayRateEUR.sort().reverse(),
                backgroundColor: [
                    '#6a9b5c'
                ],
                borderWidth: 4
            }]
        })
        setChartDataCAD({
            labels: ArrayData.sort(),
            datasets: [{
                label: "Курс",
                data: ArrayRateCAD.sort().reverse(),
                backgroundColor: [
                    '#6a9b5c'
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


            <div className='rate'>


                <div className='blocks'>
                    <h3 className={classes.RateName}>USD</h3>
                    <div className={classes.Rate}>{(1 / props.rate.currencyRate.USD).toFixed(3)}</div>
                    <div className='line'><Line data={chartDataUSD} options={{responsive: true}}/></div>
                </div>
                <div className='blocks'>
                    <h3 className={classes.RateName}>EUR</h3>
                    <div className={classes.Rate}>{(1 / props.rate.currencyRate.EUR).toFixed(3)}</div>
                    <div className='line'><Line data={chartDataEUR} options={{responsive: true}}/></div>
                </div>
                <div className='blocks'>
                    <h3 className={classes.RateName}>CAD</h3>
                    <div className={classes.Rate}>{(1 / props.rate.currencyRate.CAD).toFixed(3)}</div>
                    <div><Line data={chartDataCAD} options={{responsive: true}}/></div>
                </div>


            </div>
        </div>
    );
}

export default Rate;
